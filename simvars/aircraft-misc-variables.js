"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftMiscVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Misc_Variables.htm

// data types

// data units

const AIRCRAFT_STATES = {
  "AMBIENT IN CLOUD": (0, _simvarUtils.define)(`True if the aircraft is in a cloud`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CONTRAILS CONDITIONS MET": (0, _simvarUtils.define)(`True if the aircraft has met the conditions required to spawn the contrail VFX`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS SLEW ACTIVE": (0, _simvarUtils.define)(`True if slew is active`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "IS SLEW ALLOWED": (0, _simvarUtils.define)(`True if slew is enabled`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "IS USER SIM": (0, _simvarUtils.define)(`Is this the user loaded aircraft`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ON ANY RUNWAY": (0, _simvarUtils.define)(`Whether or not the plane is currently on a runway`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PLANE IN PARKING STATE": (0, _simvarUtils.define)(`Whether or not the plane is currently parked (true) or not (false)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SURFACE CONDITION": (0, _simvarUtils.define)(`The state of the surface directly under the aircraft`, _simvarUtils.Enum, _simvarUtils.Int32),
  "SURFACE INFO VALID": (0, _simvarUtils.define)(`True indicates that the SURFACE CONDITION return value is meaningful`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SURFACE TYPE": (0, _simvarUtils.define)(`The type of surface under the aircraft`, _simvarUtils.Enum, _simvarUtils.Int32),
  "STRUCTURAL ICE PCT": (0, _simvarUtils.define)(`Amount of ice on aircraft structure. 100 is fully iced`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  TITLE: (0, _simvarUtils.define)(`Title from aircraft.cfg`, _simvarUtils.NullUnit, _simvarUtils.String128),
  "TOW CONNECTION": (0, _simvarUtils.define)(`True if a towline is connected to both tow plane and glider`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WINDSHIELD RAIN EFFECT AVAILABLE": (0, _simvarUtils.define)(`Is visual effect available on this aircraft`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const AIRCRAFT_POSITION_DIRECTION_AND_SPEED = {
  "ACCELERATION BODY X": (0, _simvarUtils.define)(`Acceleration relative to aircraft X axis, in east/west direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ACCELERATION BODY Y": (0, _simvarUtils.define)(`Acceleration relative to aircraft Y axis, in vertical direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ACCELERATION BODY Z": (0, _simvarUtils.define)(`Acceleration relative to aircraft Z axis, in north/south direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ACCELERATION WORLD X": (0, _simvarUtils.define)(`Acceleration relative to the earth X axis, in east/west direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ACCELERATION WORLD Y": (0, _simvarUtils.define)(`Acceleration relative to the earth Y axis, in vertical direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ACCELERATION WORLD Z": (0, _simvarUtils.define)(`Acceleration relative to the earth Z axis, in north/south direction`, _simvarUtils.Feet, _simvarUtils.Float64),
  "SURFACE RELATIVE GROUND SPEED": (0, _simvarUtils.define)(`The speed of the aircraft relative to the speed of the first surface directly underneath it. Use this to retrieve, for example, an aircraft's taxiing speed while it is moving on a moving carrier. It also applies to airborne aircraft, for example when a helicopter is successfully hovering above a moving ship, this value should be zero. The returned value will be the same as GROUND VELOCITY if the first surface beneath it is not moving`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64),
  "GROUND VELOCITY": (0, _simvarUtils.define)(` relative to the earths surface`, _simvarUtils.Knots, _simvarUtils.Float64),
  "PLANE ALTITUDE": (0, _simvarUtils.define)(`Altitude of aircraft`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "PLANE ALT ABOVE GROUND": (0, _simvarUtils.define)(`Altitude above the surface`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "PLANE ALT ABOVE GROUND MINUS CG": (0, _simvarUtils.define)(`Altitude above the surface minus CG`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "PLANE BANK DEGREES": (0, _simvarUtils.define)(`Bank angle, although the name mentions degrees the units used are radians`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE HEADING DEGREES GYRO": (0, _simvarUtils.define)(`Heading indicator taken from the aircraft gyro`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "PLANE HEADING DEGREES MAGNETIC": (0, _simvarUtils.define)(`Heading relative to magnetic north - although the name mentions degrees the units used are radians`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE HEADING DEGREES TRUE": (0, _simvarUtils.define)(`Heading relative to true north - although the name mentions degrees the units used are radians`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE LATITUDE": (0, _simvarUtils.define)(`Latitude of aircraft, North is positive, South negative`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE LONGITUDE": (0, _simvarUtils.define)(`Longitude of aircraft, East is positive, West negative`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE PITCH DEGREES": (0, _simvarUtils.define)(`Pitch angle, although the name mentions degrees the units used are radians`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PLANE TOUCHDOWN BANK DEGREES": (0, _simvarUtils.define)(`This float represents the bank of the player's plane from the last touchdown`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "PLANE TOUCHDOWN HEADING DEGREES MAGNETIC": (0, _simvarUtils.define)(`This float represents the magnetic heading of the player's plane from the last touchdown`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "PLANE TOUCHDOWN HEADING DEGREES TRUE": (0, _simvarUtils.define)(`This float represents the true heading of the player's plane from the last touchdown`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "PLANE TOUCHDOWN LATITUDE": (0, _simvarUtils.define)(`This float represents the plane latitude for the last touchdown`, _simvarUtils.Radians, _simvarUtils.Float64),
  "PLANE TOUCHDOWN LONGITUDE": (0, _simvarUtils.define)(`This float represents the plane longitude for the last touchdown`, _simvarUtils.Radians, _simvarUtils.Float64),
  "PLANE TOUCHDOWN NORMAL VELOCITY": (0, _simvarUtils.define)(`This float represents the player's plane speed according to ground normal from the last touchdown`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PLANE TOUCHDOWN PITCH DEGREES": (0, _simvarUtils.define)(`This float represents the pitch of the player's plane from the last touchdown`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "RELATIVE WIND VELOCITY BODY X": (0, _simvarUtils.define)(`Lateral (X axis) speed relative to wind`, _simvarUtils.Feet, _simvarUtils.Float64),
  "RELATIVE WIND VELOCITY BODY Y": (0, _simvarUtils.define)(`Vertical (Y axis) speed relative to wind`, _simvarUtils.Feet, _simvarUtils.Float64),
  "RELATIVE WIND VELOCITY BODY Z": (0, _simvarUtils.define)(`Longitudinal (Z axis) speed relative to wind`, _simvarUtils.Feet, _simvarUtils.Float64),
  "ROTATION ACCELERATION BODY X": (0, _simvarUtils.define)(`Rotation acceleration relative to aircraft X axis`, _simvarUtils.RadiansPerSecondSquared, _simvarUtils.SFloat64),
  "ROTATION ACCELERATION BODY Y": (0, _simvarUtils.define)(`Rotation acceleration relative to aircraft Y axis`, _simvarUtils.RadiansPerSecondSquared, _simvarUtils.SFloat64),
  "ROTATION ACCELERATION BODY Z": (0, _simvarUtils.define)(`Rotation acceleration relative to aircraft Z axis`, _simvarUtils.RadiansPerSecondSquared, _simvarUtils.SFloat64),
  "ROTATION VELOCITY BODY X": (0, _simvarUtils.define)(`Rotation velocity relative to aircraft X axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "ROTATION VELOCITY BODY Y": (0, _simvarUtils.define)(`Rotation velocity relative to aircraft Y axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "ROTATION VELOCITY BODY Z": (0, _simvarUtils.define)(`Rotation velocity relative to aircraft Z axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "SLOPE TO ATC RUNWAY": (0, _simvarUtils.define)(`The slope between the plane and the expected landing position of the runway. Returns 0 if no runway is assigned`, _simvarUtils.Radians, _simvarUtils.Float64),
  "VELOCITY BODY X": (0, _simvarUtils.define)(`True lateral speed, relative to aircraft X axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "VELOCITY BODY Y": (0, _simvarUtils.define)(`True vertical speed, relative to aircraft Y axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "VELOCITY BODY Z": (0, _simvarUtils.define)(`True longitudinal speed, relative to aircraft Z axis`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "VERTICAL SPEED": (0, _simvarUtils.define)(`The current indicated vertical speed for the aircraft`, _simvarUtils.Feet, _simvarUtils.SFloat64)
};

/**

THIS ONE'S GOING TO NEED A SECOND LOOK, BECAUSE OF XYZ NIFTINESS

const AIRCRAFT_STRUCTS = {
    "EYEPOINT POSITION": define(
        `The eyepoint position relative to the reference datum position for the aircraft. SIMCONNECT_DATA_XYZ feet`,
    ),
    "STRUC AIRSPEED HOLD PID CONSTS": define(
        `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    ),
    "STRUC HEADING HOLD PID CONSTS": define(
        `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    ),
    "STRUCT BODY ROTATION ACCELERATION 	": define(
        ` body rotation acceleration. SIMCONNECT_DATA_XYZ radians per second`,
    ),
    "STRUCT BODY ROTATION VELOCITY": define(
        `The body rotation velocity. SIMCONNECT_DATA_XYZ radians per second`,
    ),
    "STRUCT BODY VELOCITY": define(
        `The object body velocity. SIMCONNECT_DATA_XYZ feet per second`,
    ),
    "STRUCT ENGINE POSITION:index": define(
        `The position of the indexed engine relative to the Datum Reference Point for the aircraft. SIMCONNECT_DATA_XYZ feet.`,
    ),
    "STRUCT EYEPOINT DYNAMIC ANGLE": define(
        `The angle of the eyepoint view. Zero, zero, zero is straight ahead. SIMCONNECT_DATA_XYZ radians`,
    ),
    "STRUCT EYEPOINT DYNAMIC OFFSET": define(
        `A variable offset away from the EYEPOINT POSITION. SIMCONNECT_DATA_XYZ feet`,
    ),
    "STRUCT LATLONALT": define(
        `Returns the latitude, longitude and altitude of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    ),
    "STRUCT LATLONALTPBH": define(
        `Returns the pitch, bank and heading of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    ),
};

**/

const AIRSPEED = {
  "AIRCRAFT WIND X": (0, _simvarUtils.define)(`Wind component in aircraft lateral (X) axis`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AIRCRAFT WIND Y": (0, _simvarUtils.define)(`Wind component in aircraft vertical (Y) axis.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AIRCRAFT WIND Z": (0, _simvarUtils.define)(`Wind component in aircraft longitudinal (Z) axis.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AIRSPEED BARBER POLE": (0, _simvarUtils.define)(`Redline airspeed (dynamic on some aircraft).`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AIRSPEED INDICATED": (0, _simvarUtils.define)(`Indicated airspeed.`, _simvarUtils.Knots, _simvarUtils.SFloat64),
  "AIRSPEED MACH": (0, _simvarUtils.define)(`Current mach.`, _simvarUtils.Mach, _simvarUtils.Float64),
  "AIRSPEED SELECT INDICATED OR TRUE": (0, _simvarUtils.define)(`The airspeed, whether true or indicated airspeed has been selected.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AIRSPEED TRUE": (0, _simvarUtils.define)(`True airspeed.`, _simvarUtils.Knots, _simvarUtils.SFloat64),
  "AIRSPEED TRUE RAW": (0, _simvarUtils.define)(`Equivalent to AIRSPEED TRUE, but does not account for wind when used to Set Airspeed value`, _simvarUtils.Knots, _simvarUtils.SFloat64),
  "BARBER POLE MACH": (0, _simvarUtils.define)(`Mach associated with maximum airspeed.`, _simvarUtils.Mach, _simvarUtils.Float64),
  "TOTAL VELOCITY": (0, _simvarUtils.define)(`Velocity regardless of direction. For example, if a helicopter is ascending vertically at 100 fps, getting this variable will return 100.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "WINDSHIELD WIND VELOCITY": (0, _simvarUtils.define)(`Longitudinal speed of wind on the windshield.`, _simvarUtils.Feet, _simvarUtils.Float64)
};
const TEMPERATURE = {
  "STANDARD ATM TEMPERATURE": (0, _simvarUtils.define)(`Outside temperature on the standard ATM scale`, _simvarUtils.Rankine, _simvarUtils.Float64),
  "TOTAL AIR TEMPERATURE": (0, _simvarUtils.define)(`Total air temperature is the air temperature at the front of the aircraft where the ram pressure from the speed of the aircraft is taken into account`, _simvarUtils.Celsius, _simvarUtils.Float64)
};
const AircraftMiscVariables = exports.AircraftMiscVariables = {
  ...AIRCRAFT_STATES,
  ...AIRCRAFT_POSITION_DIRECTION_AND_SPEED,
  //  ...AIRCRAFT_STRUCTS,
  ...AIRSPEED,
  ...TEMPERATURE
};