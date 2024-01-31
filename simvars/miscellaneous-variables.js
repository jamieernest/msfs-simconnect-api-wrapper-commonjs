"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiscellaneousVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Miscellaneous_Variables.htm

// data types

// data units

const MISC = {
  "ANIMATION DELTA TIME": (0, _simvarUtils.define)(`Difference of time between the current frame and the last frame where this SimObject has been animated`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "ARTIFICIAL GROUND ELEVATION": (0, _simvarUtils.define)(`In case scenery is not loaded for AI planes, this variable can be used to set a default surface elevation.`, _simvarUtils.Feet, _simvarUtils.Float64),
  CATEGORY: (0, _simvarUtils.define)(`Type of aircraft`, _simvarUtils.NullUnit, _simvarUtils.String128),
  "CRASH FLAG": (0, _simvarUtils.define)(`Flag value that indicates the cause of a crash.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "CRASH SEQUENCE": (0, _simvarUtils.define)(`The state of the crash event sequence.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "GROUND ALTITUDE": (0, _simvarUtils.define)(`Altitude of surface.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "HAND ANIM STATE": (0, _simvarUtils.define)(`What frame of the hand is currently used.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "IDLE ANIMATION ID": (0, _simvarUtils.define)(`The ID of the idle animation for the sim object.`, _simvarUtils.NullUnit, _simvarUtils.String32),
  MAGVAR: (0, _simvarUtils.define)(`Magnetic variation.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "MISSION SCORE": (0, _simvarUtils.define)(``, _simvarUtils.Number, _simvarUtils.SInt32),
  REALISM: (0, _simvarUtils.define)(`General realism percent.`, _simvarUtils.Number, _simvarUtils.SInt32),
  "REALISM CRASH DETECTION": (0, _simvarUtils.define)(`True indicates crash detection is turned on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "REALISM CRASH WITH OTHERS": (0, _simvarUtils.define)(`True indicates crashing with other aircraft is possible.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SIM DISABLED": (0, _simvarUtils.define)(`Is sim disabled.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "SIM ON GROUND": (0, _simvarUtils.define)(`On ground flag.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SIM SHOULD SET ON GROUND": (0, _simvarUtils.define)(``, _simvarUtils.Bool, _simvarUtils.SInt32),
  "TRACK IR ENABLE": (0, _simvarUtils.define)(`Returns true if Track IR is enabled or not.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "TOTAL WORLD VELOCITY": (0, _simvarUtils.define)(`Speed relative to the earths center.`, _simvarUtils.FeetPerSecond, _simvarUtils.SFloat64),
  "USER INPUT ENABLED": (0, _simvarUtils.define)(`Is input allowed from the user.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "VISUAL MODEL RADIUS": (0, _simvarUtils.define)(`Model radius.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "VELOCITY WORLD X": (0, _simvarUtils.define)(`Speed relative to earth, in East/West direction.`, _simvarUtils.FeetPerSecond, _simvarUtils.SFloat64),
  "VELOCITY WORLD Y": (0, _simvarUtils.define)(`Speed relative to earth, in vertical direction.`, _simvarUtils.FeetPerSecond, _simvarUtils.SFloat64),
  "VELOCITY WORLD Z": (0, _simvarUtils.define)(`Speed relative to earth, in North/South direction.`, _simvarUtils.FeetPerSecond, _simvarUtils.SFloat64)
};
const AMBIENT_WEATHER = {
  "AMBIENT DENSITY": (0, _simvarUtils.define)(`Ambient density.`, _simvarUtils.SlugsPerCubicFeet, _simvarUtils.Float64),
  "AMBIENT PRECIP RATE": (0, _simvarUtils.define)(`The current precipitation rate.`, _simvarUtils.MillimetersOfWater, _simvarUtils.Float64),
  "AMBIENT PRECIP STATE": (0, _simvarUtils.define)(`The current state of precipitation.`, _simvarUtils.Mask, _simvarUtils.Int32),
  "AMBIENT PRESSURE": (0, _simvarUtils.define)(`Ambient pressure.`, _simvarUtils.InchesOfMecury, _simvarUtils.Float64),
  "AMBIENT TEMPERATURE": (0, _simvarUtils.define)(`Ambient temperature.`, _simvarUtils.Celsius, _simvarUtils.Float64),
  "AMBIENT VISIBILITY": (0, _simvarUtils.define)(`Ambient visibility (only measures ambient particle visibility - related to ambient density).`, _simvarUtils.Meters, _simvarUtils.Float64),
  "AMBIENT WIND DIRECTION": (0, _simvarUtils.define)(`Wind direction, relative to true north.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "AMBIENT WIND VELOCITY": (0, _simvarUtils.define)(`Wind velocity.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AMBIENT WIND X": (0, _simvarUtils.define)(`Wind component in East/West direction.`, _simvarUtils.MetersPerSecond, _simvarUtils.Float64),
  "AMBIENT WIND Y": (0, _simvarUtils.define)(`Wind component in vertical direction.`, _simvarUtils.MetersPerSecond, _simvarUtils.Float64),
  "AMBIENT WIND Z": (0, _simvarUtils.define)(`Wind component in North/South direction.`, _simvarUtils.MetersPerSecond, _simvarUtils.Float64),
  "BAROMETER PRESSURE": (0, _simvarUtils.define)(`Barometric pressure.`, _simvarUtils.Millibars, _simvarUtils.Float64),
  "SEA LEVEL PRESSURE": (0, _simvarUtils.define)(`Barometric pressure at sea level.`, _simvarUtils.Millibars, _simvarUtils.Float64),
  "STRUCT AMBIENT WIND": (0, _simvarUtils.define)(`X (latitude), Y (vertical) and Z (longitude) components of the wind.`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64)
};
const MiscellaneousVariables = exports.MiscellaneousVariables = {
  ...MISC,
  ...AMBIENT_WEATHER
};