"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Services_Variables.htm

// data types

// data units

const BAGGAGE_LOADER = {
  "BAGGAGELOADER ANGLE CURRENT": (0, _simvarUtils.define)(`Current angle of the baggage loader ramp, relative to the ground.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "BAGGAGELOADER ANGLE TARGET": (0, _simvarUtils.define)(`Target angle of the baggage loader ramp, relative to the ground.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "BAGGAGELOADER END RAMP Y": (0, _simvarUtils.define)(`"Y" axis position of the end of the baggage loader ramp, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BAGGAGELOADER END RAMP Z": (0, _simvarUtils.define)(`"Z" axis position of the end of the baggage loader ramp, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BAGGAGELOADER PIVOT Y": (0, _simvarUtils.define)(`"Y" axis position of the baggage loader ramp pivot, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BAGGAGELOADER PIVOT Z": (0, _simvarUtils.define)(`"Z" axis position of the baggage loader ramp pivot, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64)
};
const BOARDING_RAMP = {
  "BOARDINGRAMP ELEVATION CURRENT": (0, _simvarUtils.define)(`The current altitude AGL of the top of the boarding ramp stairs.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BOARDINGRAMP ELEVATION TARGET": (0, _simvarUtils.define)(`The target altitude AGL of the top of the boarding ramp stairs.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BOARDINGRAMP END POSITION Y": (0, _simvarUtils.define)(`The "Y" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BOARDINGRAMP END POSITION Z": (0, _simvarUtils.define)(`The "Z" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BOARDINGRAMP ORIENTATION CURRENT": (0, _simvarUtils.define)(`The current orientation of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "BOARDINGRAMP ORIENTATION TARGET": (0, _simvarUtils.define)(`The target orientation of of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "BOARDINGRAMP START POSITION Y": (0, _simvarUtils.define)(`The "Y" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "BOARDINGRAMP START POSITION Z": (0, _simvarUtils.define)(`The "Z" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64)
};
const CATERING_TRUCK = {
  "CATERINGTRUCK AIRCRAFT DOOR CONTACT OFFSET Z": (0, _simvarUtils.define)(`The "Z" axis position of the point of contact between the catering truck and the bottom of the aircraft door, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "CATERINGTRUCK ELEVATION CURRENT": (0, _simvarUtils.define)(`The current altitude AGL of the bottom of the catering truck container.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "CATERINGTRUCK ELEVATION TARGET": (0, _simvarUtils.define)(`The target altitude AGL of the bottom of the catering truck container.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "CATERINGTRUCK OPENING CURRENT": (0, _simvarUtils.define)(`The current state of the catering truck when opening the container and deploying the bridge, where 0 is fully closed and 1 is fully opened and deployed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "CATERINGTRUCK OPENING TARGET": (0, _simvarUtils.define)(`The target state of the catering truck the container is opene and the bridge deployed, where 0 is fully closed and 1 is fully opened and deployed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const FUEL_TRUCK = {
  "FUELTRUCK HOSE DEPLOYED": (0, _simvarUtils.define)(`The current deployment amount of the fuel truck hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "FUELTRUCK HOSE END POSX": (0, _simvarUtils.define)(`The "X" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "FUELTRUCK HOSE END POSZ": (0, _simvarUtils.define)(`The "Z" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "FUELTRUCK HOSE END RELATIVE HEADING": (0, _simvarUtils.define)(`The heading of the end of the fuel truck hose, relative to the vehicle heading.`, _simvarUtils.Degrees, _simvarUtils.Float64)
};
const GROUND_POWER_UNITS = {
  "GROUNDPOWERUNIT HOSE DEPLOYED": (0, _simvarUtils.define)(`The current deployment amount of the ground power unit hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "GROUNDPOWERUNIT HOSE END POSX": (0, _simvarUtils.define)(`The "X" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "GROUNDPOWERUNIT HOSE END POSZ": (0, _simvarUtils.define)(`The "Z" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "GROUNDPOWERUNIT HOSE END RELATIVE HEADING": (0, _simvarUtils.define)(`The heading of the end of the ground power unit hose, relative to the vehicle heading.`, _simvarUtils.Degrees, _simvarUtils.Float64)
};
const JETWAY = {
  "JETWAY HOOD LEFT BEND": (0, _simvarUtils.define)(`The target position for the left bend animation of the jetway hood.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "JETWAY HOOD LEFT DEPLOYMENT": (0, _simvarUtils.define)(`The target angle for the left deployment animation of the jetway hood, where 0 is considered vertical.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "JETWAY HOOD RIGHT BEND": (0, _simvarUtils.define)(`The target position for the right bend animation of the jetway hood.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "JETWAY HOOD RIGHT DEPLOYMENT": (0, _simvarUtils.define)(`The target angle for the right deployment animation of the jetway hood, where 0 is considered vertical.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "JETWAY HOOD TOP HORIZONTAL": (0, _simvarUtils.define)(`Target position for the top horizontal animation of the jetway hood. Values can be between -100% and 100%.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "JETWAY HOOD TOP VERTICAL": (0, _simvarUtils.define)(`Target position for the top vertical animation of the jetway hood. Values can be between -100% and 100%.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "JETWAY MOVING": (0, _simvarUtils.define)(`This will be 1 (TRUE) id the jetway body is currently moving (it will not include checks on hood animation).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "JETWAY WHEEL ORIENTATION CURRENT": (0, _simvarUtils.define)(`The current angle of the jetway wheels.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "JETWAY WHEEL ORIENTATION TARGET": (0, _simvarUtils.define)(`The (approximate) target angle for the jetway wheels.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "JETWAY WHEEL SPEED": (0, _simvarUtils.define)(`The current speed of the jetway wheels.`, _simvarUtils.MetersPerSecond, _simvarUtils.Float64)
};
const MARSHALLER = {
  "MARSHALLER AIRCRAFT DIRECTION PARKINGSPACE": (0, _simvarUtils.define)(`Currently not used in the simulation.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT DISTANCE": (0, _simvarUtils.define)(`The distance between the Marshaller and the aircraft.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION X PARKINGSPACE": (0, _simvarUtils.define)(`Position on the X axis of the aircraft in the parking space (negative means the aircraft is on the left side and positive the right side).`, _simvarUtils.Meters, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION Z PARKINGSPACE": (0, _simvarUtils.define)(`Position on the Z axis of the aircraft in the parking space (negative means the aircraft is behind the parking space and positive is in front of the parking space).`, _simvarUtils.Meters, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT ENGINE SHUTDOWN": (0, _simvarUtils.define)(`True if the engine(s) of the aircraft is (are) shut down.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "MARSHALLER AIRCRAFT HEADING PARKINGSPACE": (0, _simvarUtils.define)(`Angle between the direction of the aircraft and the direction of the parking place.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT PROJECTION POINT PARKINGSPACE": (0, _simvarUtils.define)(`Value in Z axis of the projection from the aircraft position following the heading of the aircraft.  `, _simvarUtils.Meters, _simvarUtils.Float64),
  "MARSHALLER AIRCRAFT VELOCITY": (0, _simvarUtils.define)(`The velocity of the aircraft.`, _simvarUtils.Knots, _simvarUtils.Float64)
};
const PUSHBACK = {
  "PUSHBACK ANGLE": (0, _simvarUtils.define)(`Pushback angle (the heading of the tug).`, _simvarUtils.Radians, _simvarUtils.Float64),
  "PUSHBACK ATTACHED": (0, _simvarUtils.define)(`True if this vehicle is attached to an aircraft.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PUSHBACK AVAILABLE": (0, _simvarUtils.define)(`True if a push back is available on the parking space.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PUSHBACK CONTACTX": (0, _simvarUtils.define)(`The towpoint position, relative to the aircrafts datum reference point.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PUSHBACK CONTACTY": (0, _simvarUtils.define)(`Pushback contact position in vertical direction.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PUSHBACK CONTACTZ": (0, _simvarUtils.define)(`Pushback contact position in fore/aft direction.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PUSHBACK STATE:index": (0, _simvarUtils.define)(`Type of pushback.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "PUSHBACK WAIT": (0, _simvarUtils.define)(`True if waiting for pushback.`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const WAGONS = {
  "WAGON BACK LINK LENGTH": (0, _simvarUtils.define)(`The length of the link at the back of the vehicle used to attach a wagon behind.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "WAGON BACK LINK ORIENTATION": (0, _simvarUtils.define)(`The current orientation of the link at the back of the vehicle used to attach a wagon behind.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "WAGON BACK LINK START POSZ": (0, _simvarUtils.define)(`The "Z" axis position of the start of the link at the back of the vehicle used to attach a wagon behind, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "WAGON FRONT LINK LENGTH": (0, _simvarUtils.define)(`The length of the link at the front of the vehicle used to be attached as wagon.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "WAGON FRONT LINK ORIENTATION": (0, _simvarUtils.define)(`The current orientation of the link at the front of the vehicle used to be attached as wagon.`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "WAGON FRONT LINK START POSZ": (0, _simvarUtils.define)(`The "Z" axis position of the start of the link at the front of the vehicle used to be attached as wagon, relative to the ground.`, _simvarUtils.Meters, _simvarUtils.Float64)
};
const ServiceVariables = exports.ServiceVariables = {
  ...BAGGAGE_LOADER,
  ...BOARDING_RAMP,
  ...CATERING_TRUCK,
  ...FUEL_TRUCK,
  ...GROUND_POWER_UNITS,
  ...JETWAY,
  ...MARSHALLER,
  ...PUSHBACK,
  ...WAGONS
};