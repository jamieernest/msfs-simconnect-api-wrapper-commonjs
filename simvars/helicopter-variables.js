"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelicopterVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Helicopter_Variables.htmBool

// data types

// data units

const COLLECTIVE = {
  "COLLECTIVE POSITION": (0, _simvarUtils.define)(`The position of the helicopter\'s collective. 0 is fully up, 100 fully depressed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const ROTORS = {
  "DISK BANK ANGLE:index": (0, _simvarUtils.define)(`Rotor bank angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "DISK BANK PCT:index": (0, _simvarUtils.define)(`Rotor bank percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "DISK CONING PCT:index": (0, _simvarUtils.define)(`Rotor coning percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "DISK PITCH ANGLE:index": (0, _simvarUtils.define)(`Rotor pitch angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "DISK PITCH PCT:index": (0, _simvarUtils.define)(`Rotor pitch percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR BRAKE ACTIVE": (0, _simvarUtils.define)(`Whether the rotor brake is active (1, TRUE) or not (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR BRAKE HANDLE POS": (0, _simvarUtils.define)(`The percentage actuated of the rotor brake handle.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR CHIP DETECTED": (0, _simvarUtils.define)(`Whether the rotor chip is detected (1,TRUE) or not (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR CLUTCH ACTIVE": (0, _simvarUtils.define)(`Whether the rotor clutch is active (1, TRUE) or not (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR CLUTCH SWITCH POS": (0, _simvarUtils.define)(`The rotor clutch switch position, either on (1 TRUE) or off (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR COLLECTIVE BLADE PITCH PCT": (0, _simvarUtils.define)(`The rotor collective blade pitch.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR CYCLIC BLADE MAX PITCH POSITION": (0, _simvarUtils.define)(`The position (angle) at which blade has the maximum cyclic pitch.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "ROTOR CYCLIC BLADE PITCH PCT": (0, _simvarUtils.define)(`The rotor cyclic blade (maximum) pitch.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR GOV ACTIVE": (0, _simvarUtils.define)(`Whether the rotor governor is active (1, TRUE) or not (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR GOV SWITCH POS": (0, _simvarUtils.define)(`The rotor governor switch position, either on (1 TRUE) or off (0, FALSE).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ROTOR LATERAL TRIM PCT": (0, _simvarUtils.define)(`The rotor lateral trim percentage.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR LONGITUDINAL TRIM PCT": (0, _simvarUtils.define)(`The rotor longitudinal trim percentage.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR ROTATION ANGLE:index": (0, _simvarUtils.define)(`Rotor rotation angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "ROTOR RPM:index": (0, _simvarUtils.define)(`The indexed rotor RPM.`, _simvarUtils.RPM, _simvarUtils.Float64),
  "ROTOR RPM PCT:index": (0, _simvarUtils.define)(`Percent max rated rpm of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ROTOR TEMPERATURE": (0, _simvarUtils.define)(`The main rotor transmission temperature.`, _simvarUtils.Rankine, _simvarUtils.Float64),
  //   "STRUCT ROTOR POSITION:index": define(
  //     `The position of the indexed rotor.`,
  //     units: `SIMCONNECT_DATA_XYZ`,
  //   ),
  "TAIL ROTOR BLADE PITCH PCT": (0, _simvarUtils.define)(`The pitch position of the tailrotor blades.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "TAIL ROTOR PEDAL POSITION": (0, _simvarUtils.define)(`Percent tail rotor pedal deflection.`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const ENGINE = {
  // The following two simvars trigger SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exceptions:
  // "ENG ROTOR RPM:index": define(
  //   `Returns the indexed rotor RPM.`,
  //   units: `percent scalar`,
  //   Int32,
  // },
  // "ENG TORQUE PERCENT:index": define(
  //   `Returns the indexed rotor torque.`,
  //   units: `percent scalar`,
  //   Int32,
  // },
};
const SLING = {
  "IS ATTACHED TO SLING": (0, _simvarUtils.define)(`Set to true if this object is attached to a sling.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "NUM SLING CABLES": (0, _simvarUtils.define)(`The number of sling cables (not hoists) that are configured for the helicopter.`, _simvarUtils.Number, _simvarUtils.Int32),
  // TODO: figure out how to expose this simvar properly
  // "SLING ACTIVE PAYLOAD STATION:index,param": define(
  //   `The payload station (identified by the parameter) where objects will be placed from the sling (identified by the index).`,
  //   Number,
  //   SInt32,
  // },
  "SLING CABLE BROKEN:index": (0, _simvarUtils.define)(`THis will be True (1) if the indexed cable is broken, or False (0) otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SLING CABLE EXTENDED LENGTH:index": (0, _simvarUtils.define)(`The length of the indexed cable extending from the aircraft.`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "SLING HOIST PERCENT DEPLOYED:index": (0, _simvarUtils.define)(`The percentage of the full length of the sling cable deployed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "SLING HOIST SWITCH:index": (0, _simvarUtils.define)(`This will be True (1) if the hoist is enabled or False (0) otherwise.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "SLING HOOK IN PICKUP MODE": (0, _simvarUtils.define)(`This will be True (1) if the hook is in pickup mode or False (0) otherwise. When True, the hook will be capable of picking up another object.`, _simvarUtils.Bool, _simvarUtils.Int32)
  //  Need to figure out whether this data type is even supported...
  //
  //   "SLING OBJECT ATTACHED:index": define(
  //     `
  //         If the SimVar units are set as boolean, this will return True (1) if a sling object is attached, or False (0) otherwise.
  //         If the SimVar units are set as a string, tis will return the container title of the object.
  //         Note that there can be multiple sling positions, indexed from 1. The sling positions are set in the Aircraft Configuration File.
  //     `,
  //     units: `Bool/String`,
  //   ),
};
const HelicopterVariables = exports.HelicopterVariables = {
  ...COLLECTIVE,
  ...ROTORS,
  ...ENGINE,
  ...SLING
};