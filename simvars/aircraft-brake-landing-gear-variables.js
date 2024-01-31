"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftBakeLandingGearVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Brake_Landing_Gear_Variables.htm

// data types

// data units

const BRAKES = {
  "ANTISKID BRAKES ACTIVE": (0, _simvarUtils.define)(`True if antiskid brakes active. This can be set using the AntiSkidActive parameter`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOBRAKES ACTIVE": (0, _simvarUtils.define)(`Whether or not the AutoBrakes are currently active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTO BRAKE SWITCH CB": (0, _simvarUtils.define)(`Auto brake switch position`, _simvarUtils.Number, _simvarUtils.Int32),
  "BRAKE DEPENDENT HYDRAULIC PRESSURE": (0, _simvarUtils.define)(`Brake dependent hydraulic pressure reading`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "BRAKE INDICATOR": (0, _simvarUtils.define)(`Brake on indication`, _simvarUtils.Position, _simvarUtils.Float64),
  "BRAKE LEFT POSITION": (0, _simvarUtils.define)(`Percent left brake`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "BRAKE LEFT POSITION EX1": (0, _simvarUtils.define)(`Percent left brake, ignoring the effect of the parking brake`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "BRAKE PARKING INDICATOR": (0, _simvarUtils.define)(`Parking brake indicator`, _simvarUtils.Bool, _simvarUtils.Int32),
  "BRAKE PARKING POSITION": (0, _simvarUtils.define)(`Gets the parking brake position - either on (true) or off (false)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "BRAKE RIGHT POSITION": (0, _simvarUtils.define)(`Percent right brake`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "BRAKE RIGHT POSITION EX1": (0, _simvarUtils.define)(`Percent right brake, ignoring the effect of the parking brake`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "REJECTED TAKEOFF BRAKES ACTIVE": (0, _simvarUtils.define)(`Whether or not the rejected takeoff brakes are currently active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "TOE BRAKES AVAILABLE": (0, _simvarUtils.define)(`True if toe brakes are available`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const CONTACT_POINTS = {
  "CONTACT POINT COMPRESSION:index": (0, _simvarUtils.define)(`The percentage value representing the amount the contact point is compressed.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "CONTACT POINT IS ON GROUND:index": (0, _simvarUtils.define)(`Returns true if the indexed contact point is on the ground, or will return false otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CONTACT POINT IS SKIDDING:index": (0, _simvarUtils.define)(`Returns true if the indexed contact point is skidding, or will return false otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CONTACT POINT POSITION:index": (0, _simvarUtils.define)(`The currently extended position of the (retractable) contact point, expressed as a percentage.`, _simvarUtils.Position, _simvarUtils.Float64),
  "CONTACT POINT SKIDDING FACTOR:index": (0, _simvarUtils.define)(`The skidding factor associated with the indexed contact point, from 0 to 1.`, _simvarUtils.PercentOver100, _simvarUtils.Float64, _simvarUtils.Float64),
  "CONTACT POINT WATER DEPTH:index": (0, _simvarUtils.define)(`This returns the depth of the water for the indexed contact point.`, _simvarUtils.Feet, _simvarUtils.Float64)
};
const LANDING_GEAR = {
  "AUX WHEEL ROTATION ANGLE": (0, _simvarUtils.define)(`Aux wheel rotation angle (rotation around the axis for the wheel)`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUX WHEEL RPM": (0, _simvarUtils.define)(`Rpm of fourth set of gear wheels`, _simvarUtils.RPM, _simvarUtils.Float64),
  "CENTER WHEEL ROTATION ANGLE": (0, _simvarUtils.define)(`Center wheel rotation angle (rotation around the axis for the wheel)`, _simvarUtils.Radians, _simvarUtils.Float64),
  "CENTER WHEEL RPM": (0, _simvarUtils.define)(`Center landing gear rpm`, _simvarUtils.RPM, _simvarUtils.Float64),
  "GEAR ANIMATION POSITION:index": (0, _simvarUtils.define)(`Percent indexed gear animation extended`, _simvarUtils.Percent, _simvarUtils.Float64),
  "GEAR AUX POSITION": (0, _simvarUtils.define)(`Percent auxiliary gear extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "GEAR AUX STEER ANGLE": (0, _simvarUtils.define)(`Aux wheel angle, negative to the left, positive to the right. The aux wheel is the fourth set of landing gear, sometimes used on helicopters`, _simvarUtils.Radians, _simvarUtils.Float64),
  "GEAR AUX STEER ANGLE PCT": (0, _simvarUtils.define)(`Aux steer angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GEAR CENTER POSITION": (0, _simvarUtils.define)(`Percent center gear extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "GEAR CENTER STEER ANGLE": (0, _simvarUtils.define)(`Center wheel angle, negative to the left, positive to the right`, _simvarUtils.Radians, _simvarUtils.Float64),
  "GEAR CENTER STEER ANGLE PCT": (0, _simvarUtils.define)(`Center steer angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GEAR DAMAGE BY SPEED": (0, _simvarUtils.define)(`True if gear has been damaged by excessive speed`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GEAR EMERGENCY HANDLE POSITION": (0, _simvarUtils.define)(`True if gear emergency handle applied`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GEAR HANDLE POSITION": (0, _simvarUtils.define)(`The gear handle position, where 0 means the handle is retracted and 1 is the handle fully applied`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "GEAR HYDRAULIC PRESSURE": (0, _simvarUtils.define)(`Gear hydraulic pressure`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "GEAR IS ON GROUND:index": (0, _simvarUtils.define)(`True if the gear is on the ground`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GEAR IS SKIDDING:index": (0, _simvarUtils.define)(`True if the gear is skidding`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GEAR LEFT POSITION": (0, _simvarUtils.define)(`Percent left gear extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "GEAR LEFT STEER ANGLE": (0, _simvarUtils.define)(`Left wheel angle, negative to the left, positive to the right`, _simvarUtils.Radians, _simvarUtils.Float64),
  "GEAR LEFT STEER ANGLE PCT": (0, _simvarUtils.define)(`Left steer angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GEAR POSITION:index": (0, _simvarUtils.define)(`Position of landing gear`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "GEAR RIGHT POSITION": (0, _simvarUtils.define)(`Percent right gear extended`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "GEAR RIGHT STEER ANGLE": (0, _simvarUtils.define)(`Right wheel angle, negative to the left, positive to the right`, _simvarUtils.Radians, _simvarUtils.Float64),
  "GEAR RIGHT STEER ANGLE PCT": (0, _simvarUtils.define)(`Right steer angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GEAR SPEED EXCEEDED": (0, _simvarUtils.define)(`True if safe speed limit for gear exceeded`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GEAR STEER ANGLE:index": (0, _simvarUtils.define)(`Alternative method of getting the steer angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "GEAR STEER ANGLE PCT:index": (0, _simvarUtils.define)(`Alternative method of getting steer angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GEAR TOTAL PCT EXTENDED": (0, _simvarUtils.define)(`Percent total gear extended`, _simvarUtils.Percent, _simvarUtils.Float64),
  "GEAR WARNING:index": (0, _simvarUtils.define)(`Gear warnings`, _simvarUtils.Enum, _simvarUtils.Float64, _simvarUtils.Float64, _simvarUtils.Int32),
  "GEAR WATER DEPTH": (0, _simvarUtils.define)(`The depth of the gear in the water`, _simvarUtils.Centimeters, _simvarUtils.Float64),
  "IS GEAR FLOATS": (0, _simvarUtils.define)(`True if landing gear are floats`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS GEAR RETRACTABLE": (0, _simvarUtils.define)(`True if gear can be retracted`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS GEAR SKIDS": (0, _simvarUtils.define)(`True if landing gear is skids`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS GEAR SKIS": (0, _simvarUtils.define)(`True if landing gear is skis`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS GEAR WHEELS": (0, _simvarUtils.define)(`True if landing gear is wheels`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LEFT WHEEL ROTATION ANGLE": (0, _simvarUtils.define)(`Left wheel rotation angle (rotation around the axis for the wheel)`, _simvarUtils.Radians, _simvarUtils.Float64),
  "LEFT WHEEL RPM": (0, _simvarUtils.define)(`Left landing gear rpm`, _simvarUtils.RPM, _simvarUtils.Float64),
  "NOSEWHEEL LOCK ON": (0, _simvarUtils.define)(`True if the nosewheel lock is engaged. This can be set using the NosewheelLock parameter.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "NOSEWHEEL MAX STEERING ANGLE": (0, _simvarUtils.define)(`Can be used to get or set the maximum permitted steering angle for the nose wheel of the aircraft`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "RETRACT FLOAT SWITCH": (0, _simvarUtils.define)(`True if retract float switch on`, _simvarUtils.Bool, _simvarUtils.Int32),
  "RETRACT LEFT FLOAT EXTENDED": (0, _simvarUtils.define)(`If aircraft has retractable floats`, _simvarUtils.Percent, _simvarUtils.Float64),
  "RETRACT RIGHT FLOAT EXTENDED": (0, _simvarUtils.define)(`If aircraft has retractable floats`, _simvarUtils.Percent, _simvarUtils.Float64),
  "RIGHT WHEEL ROTATION ANGLE": (0, _simvarUtils.define)(`Right wheel rotation angle (rotation around the axis for the wheel)`, _simvarUtils.Radians, _simvarUtils.Float64),
  "RIGHT WHEEL RPM": (0, _simvarUtils.define)(`Right landing gear rpm.`, _simvarUtils.RPM, _simvarUtils.Float64),
  "STEER INPUT CONTROL": (0, _simvarUtils.define)(`Position of steering tiller`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "TAILWHEEL LOCK ON": (0, _simvarUtils.define)(`True if tailwheel lock applied. This can be set using the TailwheelLock parameter.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WATER LEFT RUDDER EXTENDED": (0, _simvarUtils.define)(`Percent extended`, _simvarUtils.Percent, _simvarUtils.Float64),
  "WATER LEFT RUDDER STEER ANGLE": (0, _simvarUtils.define)(`Water left rudder angle, negative to the left, positive to the right`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "WATER LEFT RUDDER STEER ANGLE PCT": (0, _simvarUtils.define)(`Water left rudder angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "WATER RIGHT RUDDER EXTENDED": (0, _simvarUtils.define)(`Percent extended`, _simvarUtils.Percent, _simvarUtils.Float64),
  "WATER RIGHT RUDDER STEER ANGLE": (0, _simvarUtils.define)(`Water right rudder angle, negative to the left, positive to the right`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "WATER RIGHT RUDDER STEER ANGLE PCT": (0, _simvarUtils.define)(`Water right rudder as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "WATER RUDDER HANDLE POSITION": (0, _simvarUtils.define)(`Position of the water rudder handle (0 handle retracted, 1 rudder handle applied)`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "WHEEL ROTATION ANGLE:index": (0, _simvarUtils.define)(`Wheel rotation angle (rotation around the axis for the wheel)`, _simvarUtils.Radians, _simvarUtils.Float64),
  "WHEEL RPM:index": (0, _simvarUtils.define)(`Wheel rpm`, _simvarUtils.RPM, _simvarUtils.Float64)
};
const AircraftBakeLandingGearVariables = exports.AircraftBakeLandingGearVariables = {
  ...BRAKES,
  ...CONTACT_POINTS,
  ...LANDING_GEAR
};