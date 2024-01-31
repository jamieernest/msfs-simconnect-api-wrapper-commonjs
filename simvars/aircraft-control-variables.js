"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftControlVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Control_Variables.htm

// data types

// data units

const AILERONS = {
  "AILERON AVERAGE DEFLECTION": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AILERON LEFT DEFLECTION": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AILERON LEFT DEFLECTION PCT": (0, _simvarUtils.define)(`Percent deflection`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "AILERON POSITION": (0, _simvarUtils.define)(`Percent aileron input left/right`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "AILERON RIGHT DEFLECTION": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AILERON RIGHT DEFLECTION PCT": (0, _simvarUtils.define)(`Percent deflection`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "AILERON TRIM": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AILERON TRIM DISABLED": (0, _simvarUtils.define)(`Whether or not the Aileron Trim has been disabled`, _simvarUtils.Bool, _simvarUtils.Float64 // wrong type probably
  ),
  "AILERON TRIM PCT": (0, _simvarUtils.define)(`The trim position of the ailerons. Zero is fully retracted`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64)
};
const ELEVATOR = {
  "ELEVATOR DEFLECTION": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "ELEVATOR DEFLECTION PCT": (0, _simvarUtils.define)(`Percent deflection`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ELEVATOR POSITION": (0, _simvarUtils.define)(`Percent elevator input deflection`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "ELEVATOR TRIM DISABLED": (0, _simvarUtils.define)(`Whether or not the Elevator Trim has been disabled`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ELEVATOR TRIM DOWN LIMIT": (0, _simvarUtils.define)(`Returns the maximum elevator trim value. This corresponds to the elevator_trim_down_limit in the Flight Model Config file`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "ELEVATOR TRIM INDICATOR": (0, _simvarUtils.define)(`Percent elevator trim (for indication)`, _simvarUtils.Position, _simvarUtils.Float64),
  "ELEVATOR TRIM NEUTRAL": (0, _simvarUtils.define)(`Elevator trim neutral`, _simvarUtils.Radians, _simvarUtils.Float64),
  "ELEVATOR TRIM PCT": (0, _simvarUtils.define)(`Percent elevator trim`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ELEVATOR TRIM POSITION": (0, _simvarUtils.define)(`Elevator trim deflection`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "ELEVATOR TRIM UP LIMIT": (0, _simvarUtils.define)(`Returns the maximum elevator trim value. This corresponds to the elevator_trim_up_limit in the Flight Model Config file`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "ELEVON DEFLECTION": (0, _simvarUtils.define)(`Elevon deflection`, _simvarUtils.Radians, _simvarUtils.Float64)
};
const FLAPS = {
  "FLAP DAMAGE BY SPEED": (0, _simvarUtils.define)(`True if flaps are damaged by excessive speed`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLAP POSITION SET": (0, _simvarUtils.define)(`Set the position of the flaps control`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "FLAP SPEED EXCEEDED": (0, _simvarUtils.define)(`True if safe speed limit for flaps exceeded`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLAPS AVAILABLE": (0, _simvarUtils.define)(`True if flaps available`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLAPS EFFECTIVE HANDLE INDEX:index": (0, _simvarUtils.define)(`This returns the effective flaps handle index, after some of the conditions have potentially forced the state to change`, _simvarUtils.Number, _simvarUtils.Int32),
  "FLAPS HANDLE INDEX:index": (0, _simvarUtils.define)(`Index of current flap position`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FLAPS HANDLE PERCENT": (0, _simvarUtils.define)(`Percent flap handle extended`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "FLAPS NUM HANDLE POSITIONS": (0, _simvarUtils.define)(`Number of available flap positions`, _simvarUtils.Number, _simvarUtils.Int32),
  "LEADING EDGE FLAPS LEFT ANGLE": (0, _simvarUtils.define)(`Angle left leading edge flap extended. Use LEADING_EDGE_FLAPS_LEFT_PERCENT to set a value`, _simvarUtils.Radians, _simvarUtils.Float64),
  "LEADING EDGE FLAPS LEFT INDEX": (0, _simvarUtils.define)(`Index of left leading edge flap position`, _simvarUtils.Number, _simvarUtils.Int32),
  "LEADING EDGE FLAPS LEFT PERCENT": (0, _simvarUtils.define)(`Percent left leading edge flap extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "LEADING EDGE FLAPS RIGHT ANGLE": (0, _simvarUtils.define)(`Angle right leading edge flap extended. Use LEADING_EDGE_FLAPS_RIGHT_PERCENT to set a value`, _simvarUtils.Radians, _simvarUtils.Float64),
  "LEADING EDGE FLAPS RIGHT INDEX": (0, _simvarUtils.define)(`Index of right leading edge flap position`, _simvarUtils.Number, _simvarUtils.Int32),
  "LEADING EDGE FLAPS RIGHT PERCENT": (0, _simvarUtils.define)(`Percent right leading edge flap extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "TRAILING EDGE FLAPS LEFT ANGLE": (0, _simvarUtils.define)(`Angle left trailing edge flap extended. Use TRAILING_EDGE_FLAPS_LEFT_PERCENT to set a value`, _simvarUtils.Radians, _simvarUtils.Float64),
  "TRAILING EDGE FLAPS LEFT INDEX": (0, _simvarUtils.define)(`Index of left trailing edge flap position`, _simvarUtils.Number, _simvarUtils.Int32),
  "TRAILING EDGE FLAPS LEFT PERCENT": (0, _simvarUtils.define)(`Percent left trailing edge flap extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "TRAILING EDGE FLAPS RIGHT ANGLE": (0, _simvarUtils.define)(`Angle right trailing edge flap extended. Use TRAILING_EDGE_FLAPS_RIGHT_PERCENT to set a value`, _simvarUtils.Radians, _simvarUtils.Float64),
  "TRAILING EDGE FLAPS RIGHT INDEX": (0, _simvarUtils.define)(`Index of right trailing edge flap position`, _simvarUtils.Number, _simvarUtils.Int32),
  "TRAILING EDGE FLAPS RIGHT PERCENT": (0, _simvarUtils.define)(`Percent right trailing edge flap extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64)
};
const FLY_BY_WIRE = {
  "FLY BY WIRE ALPHA PROTECTION": (0, _simvarUtils.define)(`Returns true if the fly-by-wire alpha protection is enabled or false otherwise`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE ELAC FAILED": (0, _simvarUtils.define)(`True if the Elevators and Ailerons computer has failed`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE ELAC SWITCH": (0, _simvarUtils.define)(`True if the fly by wire Elevators and Ailerons computer is on`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE FAC FAILED": (0, _simvarUtils.define)(`True if the Flight Augmentation computer has failed`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE FAC SWITCH": (0, _simvarUtils.define)(`True if the fly by wire Flight Augmentation computer is on`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE SEC FAILED": (0, _simvarUtils.define)(`True if the Spoilers and Elevators computer has failed`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY BY WIRE SEC SWITCH": (0, _simvarUtils.define)(`True if the fly by wire Spoilers and Elevators computer is on`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const FOLDING_WINGS = {
  "FOLDING WING HANDLE POSITION": (0, _simvarUtils.define)(`True if the folding wing handle is engaged`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FOLDING WING LEFT PERCENT": (0, _simvarUtils.define)(`Left folding wing position, 1.0 is fully folded`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "FOLDING WING RIGHT PERCENT": (0, _simvarUtils.define)(`Right folding wing position, 1.0 is fully folded`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const RUDDER = {
  "RUDDER DEFLECTION": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "RUDDER DEFLECTION PCT": (0, _simvarUtils.define)(`Percent deflection`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "RUDDER PEDAL INDICATOR": (0, _simvarUtils.define)(`Rudder pedal position`, _simvarUtils.Position, _simvarUtils.Float64),
  "RUDDER PEDAL POSITION": (0, _simvarUtils.define)(`Percent rudder pedal deflection (for animation)`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "RUDDER POSITION": (0, _simvarUtils.define)(`Percent rudder input deflection`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "RUDDER TRIM": (0, _simvarUtils.define)(`Angle deflection`, _simvarUtils.Radians, _simvarUtils.Float64),
  "RUDDER TRIM DISABLED": (0, _simvarUtils.define)(`Whether or not the Rudder Trim has been disabled`, _simvarUtils.Bool, _simvarUtils.Int32),
  "RUDDER TRIM PCT": (0, _simvarUtils.define)(`The trim position of the rudder. Zero is no trim`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64)
};
const SPOILERS = {
  "SPOILERS ARMED": (0, _simvarUtils.define)(`Checks if autospoilers are armed (true) or not (false)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SPOILER AVAILABLE": (0, _simvarUtils.define)(`True if spoiler system available`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SPOILERS HANDLE POSITION": (0, _simvarUtils.define)(`Spoiler handle position`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "SPOILERS LEFT POSITION": (0, _simvarUtils.define)(`Percent left spoiler deflected`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "SPOILERS RIGHT POSITION": (0, _simvarUtils.define)(`Percent right spoiler deflected`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const CARRIER_OPERATIONS = {
  "BLAST SHIELD POSITION:index": (0, _simvarUtils.define)(`Indexed from 1, 100 is fully deployed, 0 flat on deck`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "CABLE CAUGHT BY TAILHOOK:index": (0, _simvarUtils.define)(`A number 1 through 4 for the cable number caught by the tailhook. Cable 1 is the one closest to the stern of the carrier. A value of 0 indicates no cable was caught`, _simvarUtils.Number, _simvarUtils.Int32),
  "CATAPULT STROKE POSITION:index": (0, _simvarUtils.define)(`Catapults are indexed from 1. This value will be 0 before the catapult fires, and then up to 100 as the aircraft is propelled down the catapult. The aircraft may takeoff before the value reaches 100 (depending on the aircraft weight, power applied, and other factors), in which case this value will not be further updated. This value could be used to drive a bogie animation`, _simvarUtils.Number, _simvarUtils.Int32),
  "HOLDBACK BAR INSTALLED": (0, _simvarUtils.define)(`Holdback bars allow build up of thrust before takeoff from a catapult, and are installed by the deck crew of an aircraft carrier`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LAUNCHBAR HELD EXTENDED": (0, _simvarUtils.define)(`This will be True if the launchbar is fully extended, and can be used, for example, to change the color of an instrument light`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LAUNCHBAR POSITION": (0, _simvarUtils.define)(`Installed on aircraft before takeoff from a carrier catapult. Note that gear cannot retract with this extended. 100 = fully extended`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "LAUNCHBAR SWITCH": (0, _simvarUtils.define)(`If this is set to True the launch bar switch has been engaged`, _simvarUtils.Bool, _simvarUtils.Int32),
  "NUMBER OF CATAPULTS": (0, _simvarUtils.define)(`Maximum of 4. A model can contain more than 4 catapults, but only the first four will be read and recognized by the simulation`, _simvarUtils.Number, _simvarUtils.Int32)
};
const AircraftControlVariables = exports.AircraftControlVariables = {
  ...AILERONS,
  ...ELEVATOR,
  ...FLAPS,
  ...FLY_BY_WIRE,
  ...FOLDING_WINGS,
  ...RUDDER,
  ...SPOILERS,
  ...CARRIER_OPERATIONS
};