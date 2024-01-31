"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftSystemVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_System_Variables.htm

// data types

// data units

const GENERAL = {
  "AIRSPEED TRUE CALIBRATE": (0, _simvarUtils.define)(`Angle of True calibration scale on airspeed indicator.`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "ALTERNATE STATIC SOURCE OPEN:index": (0, _simvarUtils.define)(`Alternate static air source.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ANEMOMETER PCT RPM": (0, _simvarUtils.define)(`Anemometer rpm as a percentage.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "ANGLE OF ATTACK INDICATOR": (0, _simvarUtils.define)(`AoA indication.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "APPLY HEAT TO SYSTEMS": (0, _simvarUtils.define)(`Used when too close to a fire.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "AUDIO PANEL AVAILABLE": (0, _simvarUtils.define)(`True if the audio panel is available.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUDIO PANEL VOLUME": (0, _simvarUtils.define)(`The Volume of the Audio Panel.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "AUTOTHROTTLE ACTIVE": (0, _simvarUtils.define)(`Auto-throttle active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "AUTO COORDINATION": (0, _simvarUtils.define)(`Is auto-coordination active.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "AVIONICS MASTER SWITCH:index": (0, _simvarUtils.define)(`The avionics master switch position, true if the switch is ON. Use an avionics circuit index when referencing.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CABIN NO SMOKING ALERT SWITCH": (0, _simvarUtils.define)(`True if the No Smoking switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CABIN SEATBELTS ALERT SWITCH": (0, _simvarUtils.define)(`True if the Seatbelts switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CANOPY OPEN": (0, _simvarUtils.define)(`Percent primary door/exit open.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "CARB HEAT AVAILABLE": (0, _simvarUtils.define)(`True if carburetor heat available.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "DELTA HEADING RATE": (0, _simvarUtils.define)(`Rate of turn of heading indicator.`, _simvarUtils.RadiansPerSecond, _simvarUtils.SFloat64),
  "DME SOUND": (0, _simvarUtils.define)(`DME audio flag.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ELT ACTIVATED": (0, _simvarUtils.define)(`Whether or not the Emergency Locator Transmitter is active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "EXTERNAL SYSTEM VALUE": (0, _simvarUtils.define)(`Generic SimVar.`, _simvarUtils.Number, _simvarUtils.SInt32),
  "FIRE BOTTLE DISCHARGED": (0, _simvarUtils.define)(`True if the fire bottle is discharged.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FIRE BOTTLE SWITCH": (0, _simvarUtils.define)(`True if the fire bottle switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GLASSCOCKPIT AUTOMATIC BRIGHTNESS": (0, _simvarUtils.define)(`This variable will return a value between 0 and 1 for the automatic brightness setting for glass cockpit displays, where 0 is the dimmest and 1 is the brightest. This value will vary depending on the time of day.`, _simvarUtils.Number, _simvarUtils.Int32),
  "GPWS SYSTEM ACTIVE": (0, _simvarUtils.define)(`True if the Ground Proximity Warning System is active.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "GPWS WARNING": (0, _simvarUtils.define)(`True if Ground Proximity Warning System installed.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GYRO DRIFT ERROR": (0, _simvarUtils.define)(`Angular error of heading indicator.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "HAS STALL PROTECTION": (0, _simvarUtils.define)(`Will return whether the aircraft has stall protection (true) or not (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "HEADING INDICATOR": (0, _simvarUtils.define)(`Heading indicator (directional gyro) indication.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "INDICATED ALTITUDE": (0, _simvarUtils.define)(`The indicated altitude.`, _simvarUtils.Feet, _simvarUtils.SFloat64),
  "INDICATED ALTITUDE CALIBRATED": (0, _simvarUtils.define)(`Indicated altitude with the altimeter calibrated to current sea level pressure.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "INDICATED ALTITUDE EX1": (0, _simvarUtils.define)(`Similar to INDICATED_ALTITUDE but doesn't affect actual plane position when setting this variable.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "INDUCTOR COMPASS HEADING REF": (0, _simvarUtils.define)(`Inductor compass heading.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "INDUCTOR COMPASS PERCENT DEVIATION": (0, _simvarUtils.define)(`Inductor compass deviation reading.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "INTERCOM MODE": (0, _simvarUtils.define)(`Intercom Mode`, _simvarUtils.Enum, _simvarUtils.Int32),
  "INTERCOM SYSTEM ACTIVE": (0, _simvarUtils.define)(`Whether or not the intercom system is active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS ALTITUDE FREEZE ON": (0, _simvarUtils.define)(`True if the altitude of the aircraft is frozen.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS ATTITUDE FREEZE ON": (0, _simvarUtils.define)(`True if the attitude (pitch, bank and heading) of the aircraft is frozen.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "IS LATITUDE LONGITUDE FREEZE ON": (0, _simvarUtils.define)(`True if the lat/lon of the aircraft (either user or AI controlled) is frozen. If this variable returns true, it means that the latitude and longitude of the aircraft are not being controlled by ESP, so enabling, for example, a SimConnect client to control the position of the aircraft. This can also apply to altitude and attitude. Also refer to the range of KEY_FREEZE..... Event IDs.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "KOHLSMAN SETTING HG:index": (0, _simvarUtils.define)(`The value for the given altimeter index in inches of mercury.`, _simvarUtils.InchesOfMecury, _simvarUtils.Float64),
  "KOHLSMAN SETTING MB:index": (0, _simvarUtils.define)(`The value for the given altimeter index in millibars.`, _simvarUtils.Millibars, _simvarUtils.Float64),
  "KOHLSMAN SETTING STD:index": (0, _simvarUtils.define)(`True if the indexed altimeter is in"Standard" mode, or false otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "MAGNETIC COMPASS": (0, _simvarUtils.define)(`Compass reading.`, _simvarUtils.Degrees, _simvarUtils.SFloat64),
  "MANUAL FUEL PUMP HANDLE": (0, _simvarUtils.define)(`Position of manual fuel pump handle. 1 is fully deployed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "OVERSPEED WARNING": (0, _simvarUtils.define)(`Overspeed warning state.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PANEL ANTI ICE SWITCH": (0, _simvarUtils.define)(`True if panel anti-ice switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PITOT ICE PCT": (0, _simvarUtils.define)(`Amount of pitot ice. 100 is fully iced.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "PITOT HEAT": (0, _simvarUtils.define)(`Pitot heat active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PITOT HEAT SWITCH:index": (0, _simvarUtils.define)(`Pitot heat switch state.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "PLANE HEADING DEGREES GYRO": (0, _simvarUtils.define)(`Heading indicator (directional gyro) indication.`, _simvarUtils.Radians, _simvarUtils.SFloat64),
  "PRESSURE ALTITUDE": (0, _simvarUtils.define)(`Standard Altitude, ie: at a 1013.25 hPa (1 atmosphere) setting.`, _simvarUtils.Meters, _simvarUtils.Float64),
  "PRESSURIZATION CABIN ALTITUDE": (0, _simvarUtils.define)(`The current altitude of the cabin pressurization.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PRESSURIZATION CABIN ALTITUDE GOAL": (0, _simvarUtils.define)(`The set altitude of the cabin pressurization.`, _simvarUtils.Feet, _simvarUtils.Float64),
  "PRESSURIZATION CABIN ALTITUDE RATE": (0, _simvarUtils.define)(`The rate at which cabin pressurization changes.`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64),
  "PRESSURIZATION DUMP SWITCH": (0, _simvarUtils.define)(`True if the cabin pressurization dump switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "PRESSURIZATION PRESSURE DIFFERENTIAL": (0, _simvarUtils.define)(`The difference in pressure between the set altitude pressurization and the current pressurization.`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "RAD INS SWITCH": (0, _simvarUtils.define)(`True if Rad INS switch on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SELECTED DME": (0, _simvarUtils.define)(`Selected DME.`, _simvarUtils.Number, _simvarUtils.Int32),
  "SMOKESYSTEM AVAILABLE": (0, _simvarUtils.define)(`Smoke system available.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SMOKE ENABLE": (0, _simvarUtils.define)(`Set to True to activate the smoke system, if one is available. Please see the notes for SMOKESYSTEM AVAILABLE for more information.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "SPEAKER ACTIVE": (0, _simvarUtils.define)(`Whether or not the speaker is active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "STALL HORN AVAILABLE": (0, _simvarUtils.define)(`True if stall alarm available.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "STALL PROTECTION OFF LIMIT": (0, _simvarUtils.define)(`Alpha below which the Stall Protection can be disabled. See the [STALL PROTECTION] section for more information.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "STALL PROTECTION ON GOAL": (0, _simvarUtils.define)(`The alpha that the Stall Protection will attempt to reach when triggered. See the [STALL PROTECTION] section for more information.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "STALL PROTECTION ON LIMIT": (0, _simvarUtils.define)(`Alpha above which the Stall Protection timer starts. See the [STALL PROTECTION] section for more information.`, _simvarUtils.Radians, _simvarUtils.Float64),
  "STALL WARNING": (0, _simvarUtils.define)(`Stall warning state.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "STRUCTURAL DEICE SWITCH": (0, _simvarUtils.define)(`True if the aircraft structure deice switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "SUCTION PRESSURE": (0, _simvarUtils.define)(`Vacuum system suction pressure.`, _simvarUtils.InchesOfMecury, _simvarUtils.SFloat64),
  "TAILHOOK HANDLE": (0, _simvarUtils.define)(`True if the tailhook handle is engaged.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "TAILHOOK POSITION": (0, _simvarUtils.define)(`Percent tail hook extended.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "TOW RELEASE HANDLE": (0, _simvarUtils.define)(`Position of tow release handle. 100 is fully deployed.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "TRUE AIRSPEED SELECTED": (0, _simvarUtils.define)(`True if True Airspeed has been selected.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "TURN COORDINATOR BALL": (0, _simvarUtils.define)(`Turn coordinator ball position.`, _simvarUtils.Position128, _simvarUtils.Int32),
  "TURN COORDINATOR BALL INV": (0, _simvarUtils.define)(`Turn coordinator ball position inverted (upside down).`, _simvarUtils.Position128, _simvarUtils.Int32),
  "TURN INDICATOR RATE": (0, _simvarUtils.define)(`Turn indicator reading.`, _simvarUtils.RadiansPerSecond, _simvarUtils.Float64),
  "TURN INDICATOR SWITCH": (0, _simvarUtils.define)(`True if turn indicator switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WINDSHIELD DEICE SWITCH": (0, _simvarUtils.define)(`True if the aircraft windshield deice switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const VARIOMETER = {
  "VARIOMETER MAC CREADY SETTING": (0, _simvarUtils.define)(`The MacCready setting used to fly an optimal speed between thermals.`, _simvarUtils.MetersPerSecond, _simvarUtils.SFloat64),
  "VARIOMETER NETTO": (0, _simvarUtils.define)(`Variometer rate using Netto (Total Energy - polar sinkRate).`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64),
  "VARIOMETER RATE": (0, _simvarUtils.define)(`The variometer rate.`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64),
  "VARIOMETER SPEED TO FLY": (0, _simvarUtils.define)(`Optimal speed to fly between thermals using polar curve and MacCready setting.`, _simvarUtils.KPH, _simvarUtils.Float64),
  "VARIOMETER SPEED TO FLY GLIDE RATIO": (0, _simvarUtils.define)(`The glide ratio at optimal speed to fly.`, _simvarUtils.Number, _simvarUtils.Int32),
  "VARIOMETER SWITCH": (0, _simvarUtils.define)(`True if the variometer switch is on, false if it is not.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "VARIOMETER TOTAL ENERGY": (0, _simvarUtils.define)(`The variometer rate using total energy.`, _simvarUtils.FeetPerSecond, _simvarUtils.Float64)
};
const WATER_BALLAST = {
  "WATER BALLAST TANK CAPACITY:index": (0, _simvarUtils.define)(`The capacity of the indexed water ballast tank.`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "WATER BALLAST TANK NUMBER": (0, _simvarUtils.define)(`The number of water ballast tank available.`, _simvarUtils.Number, _simvarUtils.Int32),
  "WATER BALLAST TANK QUANTITY:index": (0, _simvarUtils.define)(`The quantity of water ballast in the indexed tank.`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "WATER BALLAST VALVE": (0, _simvarUtils.define)(`True (1) if a water ballast valve is available, False (0) otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WATER BALLAST VALVE FLOW RATE": (0, _simvarUtils.define)(`The flow rate of the water ballast valve.`, _simvarUtils.GallonsPerHour, _simvarUtils.Float64)
};
const LIGHTS = {
  "IS ANY INTERIOR LIGHT ON": (0, _simvarUtils.define)(`Will return true if any interior light is on or false otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  // "LANDING LIGHT PBH": define(
  //   `Landing light pitch bank and heading.`,
  //   units: `SIMCONNECT_DATA_XYZ structure`,
  //   TODO: figure out how to read XYZ datastructure
  // },
  "LIGHT BEACON": (0, _simvarUtils.define)(`Light switch state.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT BEACON ON": (0, _simvarUtils.define)(`Returns true if the target beacon light is functioning or if the switch is ON. Use beacon lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT BACKLIGHT INTENSITY": (0, _simvarUtils.define)(`Vehicle backlights current intensity (0 = off, 1 = full intensity).`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "LIGHT BRAKE ON": (0, _simvarUtils.define)(`Returns true if the target brake light is functioning or if the switch is ON.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT CABIN": (0, _simvarUtils.define)(`Light switch state.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT CABIN ON": (0, _simvarUtils.define)(`Returns true if the target cabin light is functioning or if the switch is ON. Use the cabin lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT CABIN POWER SETTING": (0, _simvarUtils.define)(`The current cabin light power setting. Requires the cabin lightdef index.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "LIGHT GLARESHIELD": (0, _simvarUtils.define)(`Whether or not the Light switch for the Glareshield is enabled.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT GLARESHIELD ON": (0, _simvarUtils.define)(`Returns true if the target glareshield light is functioning or if the switch is ON. Use the glareshield lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT GLARESHIELD POWER SETTING": (0, _simvarUtils.define)(`The current glareshield light power setting. Requires the glareshield lightdef index.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "LIGHT GYROLIGHT INTENSITY": (0, _simvarUtils.define)(`Vehicle gyrolights current intensity (0 = off, 1 = full intensity).`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "LIGHT HEAD ON": (0, _simvarUtils.define)(`Returns true if the target navigation light is functioning or if the switch is ON.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT HEADLIGHT INTENSITY": (0, _simvarUtils.define)(`Vehicle headlights current intensity (0 = off, 1 = full intensity).`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "LIGHT LANDING ON": (0, _simvarUtils.define)(`Returns true if the target landing light is functioning or if the switch is ON. Use landing lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT LANDING": (0, _simvarUtils.define)(`Light switch state for landing light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT LOGO": (0, _simvarUtils.define)(`Light switch state for logo light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT LOGO ON": (0, _simvarUtils.define)(`Returns true if the target logo light is functioning or if the switch is ON. Use the logo lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT NAV ON": (0, _simvarUtils.define)(`Returns true if the target navigation light is functioning or if the switch is ON. Use navigation lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT NAV": (0, _simvarUtils.define)(`Light switch state for the NAV light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT ON STATES": (0, _simvarUtils.define)(`light on using bit mask (see documentation)`, _simvarUtils.Mask, _simvarUtils.Int32),
  "LIGHT PANEL": (0, _simvarUtils.define)(`Light switch state of the panel light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT PANEL ON": (0, _simvarUtils.define)(`Returns true if the target panel light is functioning or if the switch is ON. Use the panel lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT PANEL POWER SETTING": (0, _simvarUtils.define)(`The current panel light power setting. Requires the panel lightdef index.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "LIGHT PEDESTRAL": (0, _simvarUtils.define)(`Whether or not the Light switch for the Pedestal is enabled.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT PEDESTRAL ON": (0, _simvarUtils.define)(`Returns true if the target pedestral light is functioning or if the switch is ON. Requires the pedestral lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT PEDESTRAL POWER SETTING": (0, _simvarUtils.define)(`The current pedestral light power setting. Requires the pedestral lightdef index.`, _simvarUtils.Percent, _simvarUtils.Float64),
  "LIGHT POTENTIOMETER:index": (0, _simvarUtils.define)(`Adjust the potentiometer of the indexed lighting. Index is defined in the appropriate lightdef hashmap setting.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "LIGHT RECOGNITION": (0, _simvarUtils.define)(`Light switch state for the recognition light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT RECOGNITION ON": (0, _simvarUtils.define)(`Returns true if the target recognition light is functioning or if the switch is ON. Use the recognition lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT STATES": (0, _simvarUtils.define)(`Same as LIGHT_ON_STATES.`, _simvarUtils.Mask, _simvarUtils.Int32),
  "LIGHT STROBE": (0, _simvarUtils.define)(`Light switch state.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT STROBE ON": (0, _simvarUtils.define)(`Returns true if the target strobe light is functioning or if the switch is ON. Use the strobe lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT TAXI": (0, _simvarUtils.define)(`Light switch state for the taxi light.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT TAXI ON": (0, _simvarUtils.define)(`Returns true if the target taxi light is functioning or if the switch is ON. Use taxi lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "LIGHT WING": (0, _simvarUtils.define)(`Light switch state for the wing lights.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "LIGHT WING ON": (0, _simvarUtils.define)(`Returns true if the target wing light is functioning or if the switch is ON. Use the wing lightdef index.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "MANUAL INSTRUMENT LIGHTS": (0, _simvarUtils.define)(`True if instrument lights are set manually.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "STROBES AVAILABLE": (0, _simvarUtils.define)(`True if strobe lights are available.`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const HYDRAULICS = {
  "HYDRAULIC PRESSURE:index": (0, _simvarUtils.define)(`Hydraulic system pressure. Indexes start at 1.`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "HYDRAULIC RESERVOIR PERCENT:index": (0, _simvarUtils.define)(`Hydraulic pressure changes will follow changes to this variable. Indexes start at 1.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "HYDRAULIC SWITCH": (0, _simvarUtils.define)(`True if hydraulic switch is on.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "HYDRAULIC SYSTEM INTEGRITY": (0, _simvarUtils.define)(`Percent system functional.`, _simvarUtils.PercentOver100, _simvarUtils.Float64)
};
const PARTIAL_PANELS = {
  "PARTIAL PANEL ADF": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL AIRSPEED": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL ALTIMETER": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL ATTITUDE": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL AVIONICS": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "PARTIAL PANEL COMM": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL COMPASS": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL ELECTRICAL": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL ENGINE": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL FUEL INDICATOR": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "PARTIAL PANEL HEADING": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL NAV": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL PITOT": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL TRANSPONDER": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL TURN COORDINATOR": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "PARTIAL PANEL VACUUM": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32),
  "PARTIAL PANEL VERTICAL VELOCITY": (0, _simvarUtils.define)(`Gauge fail flag.`, _simvarUtils.Enum, _simvarUtils.SInt32)
};
const PAYLOAD_STATIONS = {
  "DROPPABLE OBJECTS COUNT:index": (0, _simvarUtils.define)(`The number of droppable objects at the station number identified by the index.`, _simvarUtils.Number, _simvarUtils.Int32),
  "DROPPABLE OBJECTS TYPE:index": (0, _simvarUtils.define)(`The type of droppable object at the station number identified by the index.`, _simvarUtils.NullUnit, _simvarUtils.SString32),
  "DROPPABLE OBJECTS UI NAME:index": (0, _simvarUtils.define)(`Descriptive name, used in User Interface dialogs, of a droppable object, identified by index.`, _simvarUtils.NullUnit, _simvarUtils.String32),
  "PAYLOAD STATION COUNT": (0, _simvarUtils.define)(`Number of payload stations (1 to 15).`, _simvarUtils.Number, _simvarUtils.Int32),
  "PAYLOAD STATION NAME:index": (0, _simvarUtils.define)(`Descriptive name for payload station.`, _simvarUtils.NullUnit, _simvarUtils.String32),
  "PAYLOAD STATION NUM SIMOBJECTS:index": (0, _simvarUtils.define)(`The number of objects at the payload station.`, _simvarUtils.Number, _simvarUtils.Int32),
  "PAYLOAD STATION OBJECT:index": (0, _simvarUtils.define)(`Places the named object at the payload station identified by the index (starting from 1). The string is the Container name (refer to the title property of Simulation Object Configuration Files).`, _simvarUtils.NullUnit, _simvarUtils.String32),
  "PAYLOAD STATION WEIGHT:index": (0, _simvarUtils.define)(`Individual payload station weight.`, _simvarUtils.Pounds, _simvarUtils.SFloat64)
};
const WARNING_VARIABLES = {
  "WARNING FUEL": (0, _simvarUtils.define)(`This is the current state of the fuel warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING FUEL LEFT": (0, _simvarUtils.define)(`This is the current state of the left fuel tank warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING FUEL RIGHT": (0, _simvarUtils.define)(`This is the current state of the right fuel tank warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING LOW HEIGHT": (0, _simvarUtils.define)(`This is the current state of the low height warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING OIL PRESSURE": (0, _simvarUtils.define)(`This is the current state of the oil pressure warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING VACUUM": (0, _simvarUtils.define)(`This is the current state of the vacuum system warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING VACUUM LEFT": (0, _simvarUtils.define)(`This is the current state of the left vacuum system warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING VACUUM RIGHT": (0, _simvarUtils.define)(`This is the current state of the right vacuum system warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32),
  "WARNING VOLTAGE": (0, _simvarUtils.define)(`This is the current state of the electrical system voltage warning, either on (true) or off (false).`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const YOKE = {
  // The official docs list the following var as "YOKE X INIDICATOR". This is clearly a typo.
  "YOKE X INDICATOR": (0, _simvarUtils.define)(`Yoke position in horizontal direction.`, _simvarUtils.Position, _simvarUtils.Float64),
  "YOKE X POSITION": (0, _simvarUtils.define)(`Percent control deflection left/right (for animation).`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "YOKE X POSITION WITH AP": (0, _simvarUtils.define)(`Percent control deflection left/right (for animation). Also includes AP's inputs.`, _simvarUtils.Position, _simvarUtils.Float64),
  // The official docs list the following var as "YOKE Y INIDICATOR". This is clearly a typo,
  // In fact, using the official name triggers a SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exception.
  "YOKE Y INDICATOR": (0, _simvarUtils.define)(`Yoke position in vertical direction.`, _simvarUtils.Position, _simvarUtils.Float64),
  "YOKE Y POSITION": (0, _simvarUtils.define)(`Percent control deflection fore/aft (for animation).`, _simvarUtils.Position, _simvarUtils.SFloat64),
  "YOKE Y POSITION WITH AP": (0, _simvarUtils.define)(`Percent control deflection fore/aft (for animation). Also includes AP's inputs.`, _simvarUtils.Position, _simvarUtils.Float64)
};
const AircraftSystemVariables = exports.AircraftSystemVariables = {
  ...GENERAL,
  ...VARIOMETER,
  ...WATER_BALLAST,
  ...LIGHTS,
  ...HYDRAULICS,
  ...PARTIAL_PANELS,
  ...PAYLOAD_STATIONS,
  ...WARNING_VARIABLES,
  ...YOKE
};