"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemEvents = exports.MSFS_NOT_CONNECTED = exports.MSFS_API = void 0;
Object.defineProperty(exports, "loadAirportDB", {
  enumerable: true,
  get: function () {
    return _airports.loadAirportDB;
  }
});
var _nodeSimconnect = require("node-simconnect");
var _index = require("./simvars/index.js");
var _index2 = require("./system-events/index.js");
var _exceptions = require("./exceptions.js");
var _airports = require("./special/airports.js");
// imports used by the API

// Special import for working with airport data

// export the airport db function, so other code can work with it directly.

const SystemEvents = exports.SystemEvents = Object.assign({}, _index2.SystemEvents, _airports.AirportEvents);
const MSFS_NOT_CONNECTED = exports.MSFS_NOT_CONNECTED = `Not connected to MSFS`;
const codeSafe = string => string.replaceAll(` `, `_`);

/**
 * API:
 *
 * - on(evtName, handler), returns a corresponding arg-less `off()` function.
 * - off(evtName, handler)
 * - get(...propNames)
 * - set(propName, value)
 */
class MSFS_API {
  constructor(appName = "MSFS API") {
    this.appName = appName;

    // set up a listener list for simconnect event handling:
    this.eventListeners = {};

    // set up an event/data/request id counter:
    this.id = 1;
    this.reserved = new Set();
  }
  async connect(opts = {}) {
    opts.autoReconnect ??= false;
    opts.retries ??= 0;
    opts.retryInterval ??= 2;
    opts.onConnect ??= () => {};
    opts.onRetry ??= () => {};
    const {
      host,
      port
    } = opts;
    try {
      const remote = this.remote = host ? {
        host,
        port: port ?? 500
      } : undefined;
      const {
        handle
      } = await (0, _nodeSimconnect.open)(this.appName, _nodeSimconnect.Protocol.KittyHawk, remote);
      if (!handle) throw new Error(`No connection handle to MSFS`);
      this.handle = handle;
      this.connected = true;
      handle.on("event", event => this.handleSystemEvent(event));
      handle.on("close", () => opts.autoReconnect && this.connect(opts));
      handle.on("exception", e => opts.onException?.(_exceptions.SIMCONNECT_EXCEPTION[e.exception]));
      // special non-simconnect handling
      this.specialGetHandlers = [await (0, _airports.getAirportHandler)(this, handle)];
      // Signal that we're done
      opts.onConnect(handle);
    } catch (err) {
      if (opts.retries) {
        opts.retries--;
        opts.onRetry(opts.retries, opts.retryInterval);
        setTimeout(() => this.connect(opts), 1000 * opts.retryInterval);
      } else throw new Error(`No connection to MSFS`);
    }
  }
  nextId() {
    if (this.id > 900) {
      this.id = 0;
    }
    let id = this.id++;
    while (this.reserved.has(id)) {
      id = this.id++;
    }
    this.reserved.add(id);
    return id;
  }
  releaseId(id) {
    this.reserved.delete(id);
  }

  // We want to make sure we only ever register for an event once
  // because MSFS does not follow the JS "register multiple handlers"
  // concept. That's up to you. So.... that's where this code comes in:
  addEventListener(eventName, eventHandler) {
    const {
      eventListeners: e
    } = this;
    if (!e[eventName]) {
      const eventID = this.nextId();
      this.handle.subscribeToSystemEvent(eventID, eventName);
      e[eventName] = {
        eventID,
        eventName,
        data: undefined,
        handlers: [eventHandler]
      };
      e[eventID] = e[eventName];
    }

    // do we need to send the most recently known value?
    else {
      e[eventName].handlers.push(eventHandler);
      const {
        data
      } = e[eventName];
      if (data) eventHandler(data);
    }
  }
  removeEventListener(eventName, eventHandler) {
    const {
      eventListeners: e
    } = this;
    const obj = e[eventName];
    const pos = obj.handlers.findIndex(h => h === eventHandler);
    if (pos > -1) obj.handlers.splice(pos, 1);
  }
  handleSystemEvent(event) {
    const {
      clientEventId: eventID,
      data
    } = event;
    const entry = this.eventListeners[eventID];
    if (!entry) {
      return console.error(`handling data for id ${eventID} without an event handler entry??`);
    }
    entry.data = data;
    entry.handlers.forEach(handle => handle(data));
  }

  /**
   * Add an event listener. This returns a function that acts
   * as the corresponding `off()` function, without needing to
   * pass any arguments in.
   *
   * @param {*} eventDefinition from SystemEvents
   * @param {*} eventHandler function that gets called when the event triggers
   * @returns
   */
  on(eventDefinition, eventHandler) {
    if (!this.connected) throw new Error(MSFS_NOT_CONNECTED);
    if (!eventDefinition) {
      console.error(`on() called without an event definition`);
      console.trace();
      return;
    }
    const {
      name: eventName
    } = eventDefinition;
    this.addEventListener(eventName, eventHandler);
    return () => this.off(eventName, eventHandler);
  }

  /**
   * Remove an event listener.
   *
   * @param {*} eventName the event name to stop listening to
   * @param {*} eventHandler the event handler that should no longer trigger for this event
   */
  off(eventName, eventHandler) {
    this.removeEventListener(eventName, eventHandler);
  }

  /**
   *
   * @param {*} triggerName
   * @param {*} value
   */
  trigger(triggerName, value = 0) {
    if (!this.connected) throw new Error(MSFS_NOT_CONNECTED);
    const {
      handle
    } = this;
    const eventID = this.nextId();
    handle.mapClientEventToSimEvent(eventID, triggerName);
    try {
      handle.transmitClientEvent(_nodeSimconnect.SimConnectConstants.OBJECT_ID_USER, eventID, value, 1,
      // highest priority
      16 // group id is priority
      );
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   *
   * @param {*} DATA_ID
   * @param {*} propNames
   * @param {*} defs
   */
  addDataDefinitions(DATA_ID, propNames, defs) {
    const {
      handle
    } = this;
    propNames.forEach((propName, pos) => {
      const def = defs[pos];
      if (def === undefined) {
        handle.clearDataDefinition(DATA_ID);
        this.releaseId(DATA_ID);
        throw new Error(`Cannot get SimVar: "${propName}" unknown.`);
      }
      handle.addToDataDefinition(DATA_ID, propName, def.units, def.data_type, 0.0, _nodeSimconnect.SimConnectConstants.UNUSED);
    });
  }

  /**
   *
   * @param {*} DATA_ID
   * @param {*} REQUEST_ID
   * @param {*} propNames
   * @param {*} defs
   * @returns
   */
  generateGetPromise(DATA_ID, REQUEST_ID, propNames, defs) {
    const {
      handle
    } = this;
    return new Promise((resolve, _reject) => {
      const handleDataRequest = ({
        requestID,
        data
      }) => {
        if (requestID === REQUEST_ID) {
          handle.off("simObjectData", handleDataRequest);
          handle.clearDataDefinition(DATA_ID);
          const result = {};
          propNames.forEach((propName, pos) => {
            result[codeSafe(propName)] = defs[pos].read(data);
          });
          resolve(result);
          this.releaseId(DATA_ID);
        }
      };
      handle.on("simObjectData", handleDataRequest);
      handle.requestDataOnSimObject(REQUEST_ID, DATA_ID, _nodeSimconnect.SimConnectConstants.OBJECT_ID_USER, _nodeSimconnect.SimConnectPeriod.ONCE, ...[0, 0, 0, 0]);
    });
  }

  /**
   * Get one or more simconnect variable values.
   *
   * @param  {...any} propNames
   * @returns
   */
  get(...propNames) {
    if (!this.connected) throw new Error(MSFS_NOT_CONNECTED);
    const DATA_ID = this.nextId();
    const REQUEST_ID = DATA_ID;
    propNames = propNames.map(s => s.replaceAll(`_`, ` `));
    // see if this is a special, non-simconnect variable:
    if (propNames.length === 1) {
      const [propName] = propNames;
      for (const get of this.specialGetHandlers) {
        if (get.supports(propName)) {
          return get(propName);
        }
      }
    }
    // if not, regular lookup.
    const defs = propNames.map(propName => _index.SimVars[propName]);
    this.addDataDefinitions(DATA_ID, propNames, defs);
    return this.generateGetPromise(DATA_ID, REQUEST_ID, propNames, defs);
  }

  /**
   * Set a simconnect variable.
   *
   * @param  {...any} propNames
   * @returns
   * @throws
   */
  set(propName, value) {
    if (!this.connected) throw new Error(MSFS_NOT_CONNECTED);
    const {
      handle
    } = this;
    propName = propName.replaceAll(`_`, ` `);
    if (value == parseFloat(value)) {
      // Extremely intentionally use coercion to see if we're dealing with a number-as-string
      value = parseFloat(value);
    }
    const DATA_ID = this.nextId();
    const def = _index.SimVars[propName];
    if (def === undefined) {
      this.releaseId(DATA_ID);
      throw new Error(`Cannot set SimVar: "${propName}" unknown.`);
    }
    const bufferLength = 100; // TODO: we probably want to allocate only as much buffer as we actually need
    const buffer = def.write(new _nodeSimconnect.RawBuffer(bufferLength), value);
    const payload = {
      buffer,
      arrayCount: 0,
      tagged: false
    };
    handle.addToDataDefinition(DATA_ID, propName, def.units, def.data_type);
    handle.setDataOnSimObject(DATA_ID, _nodeSimconnect.SimConnectConstants.OBJECT_ID_USER, payload);
    // cleanup, with *plenty* of time for SimConnect to resolve the data object before clearing it out.
    setTimeout(() => {
      this.releaseId(DATA_ID);
      handle.clearDataDefinition(DATA_ID);
    }, 500);
  }

  /**
   *
   * @param {*} handler
   * @param {*} interval
   * @param  {...any} propNames
   */
  schedule(handler, interval, ...propNames) {
    if (!this.connected) throw new Error(MSFS_NOT_CONNECTED);
    let running = true;
    const run = async () => {
      handler(await this.get(...propNames));
      if (running) setTimeout(run, interval);
    };
    run();
    return () => running = false;
  }
}
exports.MSFS_API = MSFS_API;
