"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimVars = void 0;
var _aircraftAutopilotAssistantVariables = require("./aircraft-autopilot-assistant-variables.js");
var _aircraftBrakeLandingGearVariables = require("./aircraft-brake-landing-gear-variables.js");
var _aircraftControlVariables = require("./aircraft-control-variables.js");
var _aircraftElectricsVariables = require("./aircraft-electrics-variables.js");
var _aircraftEngineVariables = require("./aircraft-engine-variables.js");
var _aircraftFlightModelVariables = require("./aircraft-flight-model-variables.js");
var _aircraftFuelVariables = require("./aircraft-fuel-variables.js");
var _aircraftMiscVariables = require("./aircraft-misc-variables.js");
var _aircraftRadioNavigationVariables = require("./aircraft-radio-navigation-variables.js");
var _aircraftSystemVariables = require("./aircraft-system-variables.js");
var _cameraVariables = require("./camera-variables.js");
var _miscellaneousVariables = require("./miscellaneous-variables.js");
var _helicopterVariables = require("./helicopter-variables.js");
var _servicesVariables = require("./services-variables.js");
var _wasmGaugeApiTokenVariables = require("./wasm-gauge-api-token-variables.js");
var _environmentVariables = require("./environment-variables.js");
// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variables.htm

const SimVars = {
  ..._aircraftAutopilotAssistantVariables.AircraftAutopilotAssistantVariables,
  ..._aircraftBrakeLandingGearVariables.AircraftBakeLandingGearVariables,
  ..._aircraftControlVariables.AircraftControlVariables,
  ..._aircraftElectricsVariables.AircraftElectricsVariables,
  ..._aircraftEngineVariables.AircraftEngineVariables,
  ..._aircraftFlightModelVariables.AircraftFlightModelVariables,
  ..._aircraftFuelVariables.AircraftFuelVariables,
  ..._aircraftMiscVariables.AircraftMiscVariables,
  ..._aircraftRadioNavigationVariables.AircraftRadioNavigationVariables,
  ..._aircraftSystemVariables.AircraftSystemVariables,
  ..._cameraVariables.CameraVariables,
  ..._miscellaneousVariables.MiscellaneousVariables,
  ..._helicopterVariables.HelicopterVariables,
  ..._servicesVariables.ServiceVariables,
  ..._wasmGaugeApiTokenVariables.WASMGaugeAPITokenVariables,
  ..._environmentVariables.EnvironmentVariables
};
Object.entries(SimVars).forEach(([key, value]) => value.name = key);

// Make sure that variables that use a :number suffix resolve
// to the ":index" definition for that variable, and to make
// sure that underscores in varnames get replaced spaces, we
// use a Proxy to intercept all property access.
const proxy = exports.SimVars = new Proxy(SimVars, {
  get(target, prop) {
    if (prop.includes(`:`)) prop = prop.replace(/:.*/, `:index`);
    return target[prop];
  }
});