"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftAutopilotAssistantVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_AutopilotAssistant_Variables.htm

// data types

// data units

const AUTOPILOT = {
  "AUTOPILOT AIRSPEED ACQUISITION": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT AIRSPEED HOLD": (0, _simvarUtils.define)(`returns whether airspeed hold is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT AIRSPEED HOLD CURRENT": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT AIRSPEED HOLD VAR": (0, _simvarUtils.define)(`Returns the target holding airspeed for the autopilot`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AUTOPILOT AIRSPEED MAX CALCULATED": (0, _simvarUtils.define)(`Returns the maximum calculated airspeed (kcas) limit set for the autopilot`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AUTOPILOT AIRSPEED MIN CALCULATED": (0, _simvarUtils.define)(`Returns the minimum calculated airspeed (kcas) limit set for the autopilot`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AUTOPILOT ALT RADIO MODE": (0, _simvarUtils.define)(`If enabled the Autopilot will use the Radio Altitude rather than the Indicated Altitude`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT ALTITUDE ARM": (0, _simvarUtils.define)(`Returns whether the autopilot is in Altitude Arm mode (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT ALTITUDE LOCK": (0, _simvarUtils.define)(`Altitude hold active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT ALTITUDE LOCK VAR": (0, _simvarUtils.define)(`Set or get the slot index which the altitude hold mode will track when captured. See alt_mode_slot_index for more information`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "AUTOPILOT ALTITUDE MANUALLY TUNABLE": (0, _simvarUtils.define)(`Whether or not the autopilot altitude is manually tunable or not`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT ALTITUDE SLOT INDEX": (0, _simvarUtils.define)(`Index of the slot that the autopilot will use for the altitude reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT APPROACH ACTIVE": (0, _simvarUtils.define)(`When true, the autopilot is currently flying the approach Flight Plan (the last legs)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT APPROACH ARM": (0, _simvarUtils.define)(`Returns true when the autopilot is active on the approach, once it reaches the adequate condition (in most cases, once it reaches the second-last waypoint of the flightplan)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT APPROACH CAPTURED": (0, _simvarUtils.define)(`Returns true when the lateral NAV mode is engaged and the angular deviation with the current tuned navigation frequency is less than 5°`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT APPROACH HOLD": (0, _simvarUtils.define)(`Returns whether pproach mode is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT APPROACH IS LOCALIZER": (0, _simvarUtils.define)(`Returns true if the current approach is using a localizer`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT ATTITUDE HOLD": (0, _simvarUtils.define)(`Attitude hold active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT AVAILABLE": (0, _simvarUtils.define)(`Available flag`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT AVIONICS MANAGED": (0, _simvarUtils.define)(`Returns whether the autopilot has active managed avionics (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT BACKCOURSE HOLD": (0, _simvarUtils.define)(`Returns whether the autopilot back course mode is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT BANK HOLD": (0, _simvarUtils.define)(`Returns whether the autopilot bank hold mode is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT BANK HOLD REF": (0, _simvarUtils.define)(`The current bank-hold bank reference. Note that if you set this, the next frame the value will be overwritten by the engine, so you may need to write to this every game frame to ensure it maintains the required value`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "AUTOPILOT CRUISE SPEED HOLD": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT DEFAULT PITCH MODE": (0, _simvarUtils.define)(`The current default pitch mode of the autopilot as configured in the plane configuration with the parameter default_pitch_mode`, _simvarUtils.Enum, _simvarUtils.Int32),
  "AUTOPILOT DEFAULT ROLL MODE": (0, _simvarUtils.define)(`The current default roll mode of the autopilot as configured in the plane configuration with the parameter default_bank_mode`, _simvarUtils.Enum, _simvarUtils.Int32),
  "AUTOPILOT DISENGAGED": (0, _simvarUtils.define)(`Returns whether the autopilot has been disengaged (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT FLIGHT DIRECTOR ACTIVE": (0, _simvarUtils.define)(`Flight director active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT FLIGHT DIRECTOR BANK": (0, _simvarUtils.define)(`Reference bank angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT FLIGHT DIRECTOR BANK EX1": (0, _simvarUtils.define)(`Raw reference bank angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT FLIGHT DIRECTOR PITCH": (0, _simvarUtils.define)(`Reference pitch angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT FLIGHT DIRECTOR PITCH EX1": (0, _simvarUtils.define)(`Raw reference pitch angle`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT FLIGHT LEVEL CHANGE": (0, _simvarUtils.define)(`Boolean, toggles the autopilot Flight Level Change mode`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "AUTOPILOT GLIDESLOPE ACTIVE": (0, _simvarUtils.define)(`When true, the autopilot is receiving a signal from the runway beacon and is following the slope to reach the ground`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT GLIDESLOPE ARM": (0, _simvarUtils.define)(`Returns true when the autopilot is active on the glide slope`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT GLIDESLOPE HOLD": (0, _simvarUtils.define)(`Returns whether the autopilot glidslope hold is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT HEADING LOCK": (0, _simvarUtils.define)(`Returns whether the autopilot heading lock is enabled (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT HEADING LOCK DIR": (0, _simvarUtils.define)(`Specifies / Returns the locked in heading for the autopilot`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "AUTOPILOT HEADING MANUALLY TUNABLE": (0, _simvarUtils.define)(`Whether or not the autopilot heading is manually tunable or not`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "AUTOPILOT HEADING SLOT INDEX": (0, _simvarUtils.define)(`Index of the slot that the autopilot will use for the heading reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT MACH HOLD": (0, _simvarUtils.define)(`Mach hold active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT MACH HOLD VAR": (0, _simvarUtils.define)(`Returns the target holding mach airspeed for the autopilot`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT MANAGED INDEX": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT MANAGED SPEED IN MACH": (0, _simvarUtils.define)(`Returns whether the managed speed is in mach (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT MANAGED THROTTLE ACTIVE": (0, _simvarUtils.define)(`Returns whether the autopilot managed throttle is active (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT MASTER": (0, _simvarUtils.define)(`On/off flag`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT MAX BANK": (0, _simvarUtils.define)(`Returns the maximum banking angle for the autopilot, in radians.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT MAX BANK ID": (0, _simvarUtils.define)(`Returns the index of the current maximum bank setting of the autopilot`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT MAX SPEED HOLD": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT NAV1 LOCK": (0, _simvarUtils.define)(`Returns TRUE (1) if the autopilot Nav1 lock is applied, or 0 (FALSE) otherwise`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT NAV SELECTED": (0, _simvarUtils.define)(`Index of Nav radio selected`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT PITCH HOLD": (0, _simvarUtils.define)(`Set to True if the autopilot pitch hold has is engaged`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT PITCH HOLD REF": (0, _simvarUtils.define)(`Returns the current autotpilot reference pitch.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "AUTOPILOT RPM HOLD": (0, _simvarUtils.define)(`True if autopilot rpm hold applied`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT RPM HOLD VAR": (0, _simvarUtils.define)(`Selected rpm`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT RPM SLOT INDEX": (0, _simvarUtils.define)(`Index of the slot that the autopilot will use for the RPM reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT SPEED SETTING": (0, _simvarUtils.define)(`Currently not used within the simulation`, _simvarUtils.Knots, _simvarUtils.Float64),
  "AUTOPILOT SPEED SLOT INDEX": (0, _simvarUtils.define)(`Index of the managed references`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT TAKEOFF POWER ACTIVE": (0, _simvarUtils.define)(`Takeoff / Go Around power mode active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT THROTTLE ARM": (0, _simvarUtils.define)(`Returns whether the autopilot auto-throttle is armed (1, TRUE) or not (0, FALSE)`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT THROTTLE MAX THRUST": (0, _simvarUtils.define)(`This can be used to set/get the thrust lever position for autopilot maximum thrust`, _simvarUtils.Percent, _simvarUtils.SFloat64),
  "AUTOPILOT VERTICAL HOLD": (0, _simvarUtils.define)(`True if autopilot vertical hold applied`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT VERTICAL HOLD VAR": (0, _simvarUtils.define)(`Selected vertical speed`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "AUTOPILOT VS SLOT INDEX": (0, _simvarUtils.define)(`Index of the slot that the autopilot will use for the VS reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`, _simvarUtils.Number, _simvarUtils.Int32),
  "AUTOPILOT WING LEVELER": (0, _simvarUtils.define)(`Wing leveler active`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTOPILOT YAW DAMPER": (0, _simvarUtils.define)(`Yaw damper active`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const AIRCRAFT_ASSISTANCE = {
  "ASSISTANCE LANDING ENABLED": (0, _simvarUtils.define)(`Returns whether landing assistance has been enabled or not`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ASSISTANCE TAKEOFF ENABLED": (0, _simvarUtils.define)(`Returns whether takeoff assistance has been enabled or not`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const AI_AIRCRAFT_PILOT = {
  "AI ANTISTALL STATE": (0, _simvarUtils.define)(`The current state of the AI anti-stall system`, _simvarUtils.Enum, _simvarUtils.Int32),
  "AI AUTOTRIM ACTIVE": (0, _simvarUtils.define)(`Returns whether the AI auto-trim system is enabled or not`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AI AUTOTRIM ACTIVE AGAINST PLAYER": (0, _simvarUtils.define)(`Returns whether the AI auto-trim system is enabled or not for AI controlled aircraft`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AI CONTROLS": (0, _simvarUtils.define)(`Returns whether the AI control system is enabled or not`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AI CURSOR MODE ACTIVE": (0, _simvarUtils.define)(`Returns whether the AI cursor mode is active or not`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ATTITUDE BARS POSITION": (0, _simvarUtils.define)(`AI reference pitch reference bars`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ATTITUDE CAGE": (0, _simvarUtils.define)(`AI caged state`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ATTITUDE INDICATOR BANK DEGREES": (0, _simvarUtils.define)(`AI bank indication`, _simvarUtils.Radians, _simvarUtils.Float64),
  "ATTITUDE INDICATOR PITCH DEGREES": (0, _simvarUtils.define)(`AI pitch indication`, _simvarUtils.Radians, _simvarUtils.Float64),
  "DELEGATE CONTROLS TO AI": (0, _simvarUtils.define)(`Returns whether the AI control system is active or not`, _simvarUtils.Bool, _simvarUtils.SInt32)
};
const FLIGHT_ASSISTANT = {
  "FLY ASSISTANT CANCEL DESTINATION": (0, _simvarUtils.define)(`When set with any value this will cancel the current flight assistant destination`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FLY ASSISTANT CANCEL DESTINATION DISPLAY": (0, _simvarUtils.define)(`When set with any value this will cancel the display of the current flight assistant destination`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FLY ASSISTANT COM AI LOCKED": (0, _simvarUtils.define)(`Returns true when the copilot AI control is active and therefore COM AI is locked on active too`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY ASSISTANT HAVE DESTINATION": (0, _simvarUtils.define)(`Returns true when a destination has been set in the flight assistant`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FLY ASSISTANT LANDING SPEED": (0, _simvarUtils.define)(`Returns the POH range or an estimated value for this speed`, _simvarUtils.NullUnit,
  // String (max 32 chars)`
  _simvarUtils.String32),
  "FLY ASSISTANT LANDING SPEED DISPLAY MODE": (0, _simvarUtils.define)(`Returns the display mode of the speed, CSS side (only STALL SPEED is working and will turn red when below)`, _simvarUtils.NullUnit,
  // String (max 32 chars)`
  _simvarUtils.String32),
  "FLY ASSISTANT NEAREST CATEGORY": (0, _simvarUtils.define)(`Selected category`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "FLY ASSISTANT NEAREST COUNT": (0, _simvarUtils.define)(`Number of elements in this category`, _simvarUtils.Number, _simvarUtils.Int32),
  "FLY ASSISTANT NEAREST NAME": (0, _simvarUtils.define)(`Returns the name of the element at the specified index`, _simvarUtils.NullUnit,
  // String (max 256 chars)`
  _simvarUtils.String256),
  "FLY ASSISTANT NEAREST SELECTED": (0, _simvarUtils.define)(`Returns the index of the currently selected element`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FLY ASSISTANT RIBBONS ACTIVE": (0, _simvarUtils.define)(`Returns true when both ribbon assistances are active (taxi and landing), and can also be used to set them`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "FLY ASSISTANT SET AS DESTINATION": (0, _simvarUtils.define)(`When set with any value, it will set the selected element as the current destination`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FLY ASSISTANT STALL SPEED": (0, _simvarUtils.define)(`Returns the flight assistant stall speed`, _simvarUtils.Knots, _simvarUtils.SFloat64),
  "FLY ASSISTANT STALL SPEED DISPLAY MODE": (0, _simvarUtils.define)(`Returns the flight assistant stall speed display mode`, _simvarUtils.NullUnit,
  // String (max 32 chars)`
  _simvarUtils.String32),
  "FLY ASSISTANT TAKEOFF SPEED": (0, _simvarUtils.define)(`Returns the flight assistant takeoff speed`, _simvarUtils.Knots, _simvarUtils.SFloat64),
  "FLY ASSISTANT TAKEOFF SPEED DISPLAY MODE": (0, _simvarUtils.define)(`Returns the flight assistant takeoff speed display mode`, _simvarUtils.NullUnit,
  // String (max 32 chars)`
  _simvarUtils.String32),
  "FLY ASSISTANT TAKEOFF SPEED ESTIMATED": (0, _simvarUtils.define)(`Can be set to override the estimated takeoff speed`, _simvarUtils.Knots, _simvarUtils.SFloat64)
};
const AircraftAutopilotAssistantVariables = exports.AircraftAutopilotAssistantVariables = {
  ...AUTOPILOT,
  ...AIRCRAFT_ASSISTANCE,
  ...AI_AIRCRAFT_PILOT,
  ...FLIGHT_ASSISTANT
};