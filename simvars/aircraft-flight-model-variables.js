"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftFlightModelVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_FlightModel_Variables.htm

// data types

// data units

const GENERAL = {
  "BETA DOT": (0, _simvarUtils.define)(`Beta dot`, _simvarUtils.RadiansPerSecond, _simvarUtils.Float64),
  "DECISION ALTITUDE MSL": (0, _simvarUtils.define)(`Design decision altitude above mean sea level`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DECISION HEIGHT": (0, _simvarUtils.define)(`Design decision height`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN CRUISE ALT": (0, _simvarUtils.define)(`This design constant represents the optimal altitude the aircraft should maintain when in cruise. It is derived from the cruise_alt setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPAWN ALTITUDE CRUISE": (0, _simvarUtils.define)(`This design constant represents the spawn altitude for the aircraft when spawning in cruise. It is derived from the spawn_cruise_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPAWN ALTITUDE DESCENT": (0, _simvarUtils.define)(`This design constant represents the spawn altitude for the aircraft when spawning in descent. It is derived from the spawn_descent_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 500ft.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPEED CLIMB": (0, _simvarUtils.define)(`This design constant represents the optimal climb speed for the aircraft. It is derived from the climb_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPEED MIN ROTATION": (0, _simvarUtils.define)(`This design constant represents the minimum speed required for aircraft rotation. It is derived from the rotation_speed_min setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPEED VC": (0, _simvarUtils.define)(`This design constant represents the aircraft ideal cruising speed. It is derived from the cruise_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. The default value is computed an internal function that uses the estimated cruise altitude and estimated cruise percent power, according of the engine type, the number of engines, the density, the wing area and some drag parameters. Normally this value is set in the CFG file and the default value is never used.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "DESIGN SPEED VS0": (0, _simvarUtils.define)(`This design constant represents the the stall speed when flaps are fully extended. It is derived from the full_flaps_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.8 x VS.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "DESIGN SPEED VS1": (0, _simvarUtils.define)(`This design constant represents the stall speed when flaps are fully retracted. It is derived from the flaps_up_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "DESIGN TAKEOFF SPEED": (0, _simvarUtils.define)(`This design constant represents the aircraft ideal takoff speed. It is derived from the takeoff_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg.`, _simvarUtils.Knots, _simvarUtils.Float64),
  "DYNAMIC PRESSURE": (0, _simvarUtils.define)(`Dynamic pressure`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "ESTIMATED CRUISE SPEED": (0, _simvarUtils.define)(`Estimated cruise speed`, _simvarUtils.Feet, _simvarUtils.Float64),
  "G FORCE": (0, _simvarUtils.define)(`Current g force`, _simvarUtils.GForce, _simvarUtils.SFloat64),
  "G LIMITER SETTING": (0, _simvarUtils.define)(`This returns the setting of the G-limiter, as set using the GLimiterSetting parameter`, _simvarUtils.Enum, _simvarUtils.Int32),
  "INCIDENCE ALPHA": (0, _simvarUtils.define)(`Angle of attack`, _simvarUtils.Radians, _simvarUtils.Float64),
  "INCIDENCE BETA": (0, _simvarUtils.define)(`Sideslip angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "IS TAIL DRAGGER": (0, _simvarUtils.define)(`True if the aircraft is a taildragger`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LINEAR CL ALPHA": (0, _simvarUtils.define)(`Linear CL alpha`, _simvarUtils.PerRadian, _simvarUtils.Float64),
  "MACH MAX OPERATE": (0, _simvarUtils.define)(`Maximum design mach`, _simvarUtils.Mach, _simvarUtils.Float64),
  "MAX G FORCE": (0, _simvarUtils.define)(`Maximum G force attained`, _simvarUtils.GForce, _simvarUtils.Float64),
  "MIN DRAG VELOCITY": (0, _simvarUtils.define)(`Minimum drag velocity, in clean, with no input and no gears, when at 10000ft.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "MIN G FORCE": (0, _simvarUtils.define)(`Minimum G force attained`, _simvarUtils.GForce, _simvarUtils.Float64),
  "SEMIBODY LOADFACTOR Y": (0, _simvarUtils.define)(`Acceleration along the axis Y divided by the gravity constant g (usually around 9.81m.s²)`, _simvarUtils.Number, _simvarUtils.Float64),
  "SEMIBODY LOADFACTOR YDOT": (0, _simvarUtils.define)(`Derivative of SEMIBODY LOADFACTOR Y in relation to time.`, _simvarUtils.Number, _simvarUtils.Float64),
  "SIGMA SQRT": (0, _simvarUtils.define)(`Sigma sqrt`, _simvarUtils.Number, _simvarUtils.Float64),
  "SIMULATED RADIUS": (0, _simvarUtils.define)(`Simulated radius`, _simvarUtils.Feet, _simvarUtils.Float64),
  "STALL ALPHA": (0, _simvarUtils.define)(`The angle of attack which produces the maximum lift coefficient before entering into stall conditions.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "STATIC PITCH": (0, _simvarUtils.define)(`The angle at which static pitch stability is achieved.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "TYPICAL DESCENT RATE": (0, _simvarUtils.define)(`the typical (normal) descent rate for the aircraft.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "WING AREA": (0, _simvarUtils.define)(`Total wing area`, _simvarUtils.SquareFeet, _simvarUtils.Float64),
  "WING FLEX PCT:index": (0, _simvarUtils.define)(`The current wing flex. Different values can be set for each wing (for example, during banking). Set an index of 1 for the left wing, and 2 for the right wing.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "WING SPAN": (0, _simvarUtils.define)(`Total wing span`, _simvarUtils.Feet, _simvarUtils.Float64),
  "YAW STRING ANGLE": (0, _simvarUtils.define)(`The yaw string angle. Yaw strings are attached to gliders as visible indicators of the yaw angle. An animation of this is not implemented in ESP.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "YAW STRING PCT EXTENDED": (0, _simvarUtils.define)(`Yaw string angle as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ZERO LIFT ALPHA": (0, _simvarUtils.define)(`The angle of attack at which the wing has zero lift.`, _simvarUtils.Radians, _simvarUtils.Float64)
};
const CENTER_OF_GRAVITY = {
  "CG AFT LIMIT": (0, _simvarUtils.define)(`Most backward authorized position of the CG according to the POH.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "CG FEET": (0, _simvarUtils.define)(`The longitudinal CG position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FEET AFT LIMIT": (0, _simvarUtils.define)(`The aft CG limit position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FEET LATERAL": (0, _simvarUtils.define)(`The lateral CG position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FEET LATERAL LEFT LIMIT": (0, _simvarUtils.define)(`The left hand lateral CG position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FEET LATERAL RIGHT LIMIT": (0, _simvarUtils.define)(`The right hand lateral CG position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FEET FWD LIMIT": (0, _simvarUtils.define)(`The forward CG limit position relative to the Reference Datum Position.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "CG FWD LIMIT": (0, _simvarUtils.define)(`Most forward authorized position of the CG according to the POH.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "CG MAX MACH": (0, _simvarUtils.define)(`Deprecated, do not use!`, _simvarUtils.Mach, _simvarUtils.Float64),
  "CG MIN MACH": (0, _simvarUtils.define)(`Deprecated, do not use!`, _simvarUtils.Mach, _simvarUtils.Float64),
  "CG PERCENT": (0, _simvarUtils.define)(`Longitudinal CG position as a percent of reference chord`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "CG PERCENT LATERAL": (0, _simvarUtils.define)(`Lateral CG position as a percent of reference chord`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "STATIC CG TO GROUND": (0, _simvarUtils.define)(`Static CG position with reference to the ground`, _simvarUtils.Feet, _simvarUtils.Float64)
};
const INTERACTIVE_POINTS = {
  "INTERACTIVE POINT BANK": (0, _simvarUtils.define)(`Interactive Point orientation: Bank`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "INTERACTIVE POINT HEADING": (0, _simvarUtils.define)(`Interactive Point orientation: Heading`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY LEFT BEND": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired left bend ratio of jetway hood`, _simvarUtils.Percent, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY LEFT DEPLOYMENT": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired left deployment angle of jetway hood`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY RIGHT BEND": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired right bend ratio of jetway hood`, _simvarUtils.Percent, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY RIGHT DEPLOYMENT": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired right deployment angle of jetway hood`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY TOP HORIZONTAL": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired top horizontal ratio of displacement of jetway hood`, _simvarUtils.Percent, _simvarUtils.Float64),
  "INTERACTIVE POINT JETWAY TOP VERTICAL": (0, _simvarUtils.define)(`Interactive Point Jetway constant, determining the desired top vertical ratio of displacement of jetway hood`, _simvarUtils.Percent, _simvarUtils.Float64),
  "INTERACTIVE POINT GOAL": (0, _simvarUtils.define)(`The Interactive Point goal percentage of opening (if it's for a door) or percentage of deployment (if it's for a hose or cable).`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "INTERACTIVE POINT OPEN": (0, _simvarUtils.define)(`Interactive Point current percentage of opening (if door) or deployment (if hose/cable)`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "INTERACTIVE POINT PITCH": (0, _simvarUtils.define)(`Interactive Point orientation: Pitch`, _simvarUtils.Degrees, _simvarUtils.Float64),
  "INTERACTIVE POINT POSX": (0, _simvarUtils.define)(`Interactive Point X position relative to datum reference point`, _simvarUtils.Feet, _simvarUtils.Float64),
  "INTERACTIVE POINT POSY": (0, _simvarUtils.define)(`Interactive Point Y position relative to datum reference point`, _simvarUtils.Feet, _simvarUtils.Float64),
  "INTERACTIVE POINT POSZ": (0, _simvarUtils.define)(`Interactive Point Z position relative to datum reference point`, _simvarUtils.Feet, _simvarUtils.Float64),
  "INTERACTIVE POINT TYPE": (0, _simvarUtils.define)(`The type of interactive point`, _simvarUtils.Enum, _simvarUtils.Int32)
};
const WEIGHT = {
  "EMPTY WEIGHT": (0, _simvarUtils.define)(`Empty weight of the aircraft`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "EMPTY WEIGHT CROSS COUPLED MOI": (0, _simvarUtils.define)(`Empty weight cross coupled moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "EMPTY WEIGHT PITCH MOI": (0, _simvarUtils.define)(`Empty weight pitch moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "EMPTY WEIGHT ROLL MOI": (0, _simvarUtils.define)(`Empty weight roll moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "EMPTY WEIGHT YAW MOI": (0, _simvarUtils.define)(`Empty weight yaw moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "MAX GROSS WEIGHT": (0, _simvarUtils.define)(`Maximum gross weight of the aircaft`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "TOTAL WEIGHT": (0, _simvarUtils.define)(`Total weight of the aircraft`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "TOTAL WEIGHT CROSS COUPLED MOI": (0, _simvarUtils.define)(`Total weight cross coupled moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "TOTAL WEIGHT PITCH MOI": (0, _simvarUtils.define)(`Total weight pitch moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "TOTAL WEIGHT ROLL MOI": (0, _simvarUtils.define)(`Total weight roll moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64),
  "TOTAL WEIGHT YAW MOI": (0, _simvarUtils.define)(`Total weight yaw moment of inertia`, _simvarUtils.Slugs, _simvarUtils.Float64)
};
const AircraftFlightModelVariables = exports.AircraftFlightModelVariables = {
  ...GENERAL,
  ...CENTER_OF_GRAVITY,
  ...INTERACTIVE_POINTS,
  ...WEIGHT
};