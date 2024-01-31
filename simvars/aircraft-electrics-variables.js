"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftElectricsVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Electrics_Variables.htm

// data types

// data units

const GENERAL_BUSES = {
  // BUS LOOKUP INDEX This is a settable simvar meaning that it can both be read and set. Some of the simvars in this list are using this to lookup a value using two arguments (one argument in addition to the component index). For example to check the state of the connection between a "circuit.45" and the "bus.2" it would be written as follows:
  // 2 (>A:BUS LOOKUP INDEX, Number) (A:CIRCUIT CONNECTION ON:45, Bool)
  // -
  "BUS BREAKER PULLED": (0, _simvarUtils.define)(`This will be true if the bus breaker is pulled. Requires a BUS_LOOKUP_INDEX and a bus index`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BUS CONNECTION ON": (0, _simvarUtils.define)(`This will be true if the bus is connected. Requires a BUS_LOOKUP_INDEX and a bus index`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ELECTRICAL GENALT LOAD": (0, _simvarUtils.define)(`This returns the percentage of the load output that is being consumed. This requires an alternator index when referencing`, _simvarUtils.Percent, _simvarUtils.Float64),
  "ELECTRICAL GENALT BUS AMPS": (0, _simvarUtils.define)(`The load handled by the alternator. This requires an alternator index when referencing`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL GENALT BUS VOLTAGE": (0, _simvarUtils.define)(`General alternator voltage. This requires an alternator index when referencing`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL MAIN BUS VOLTAGE": (0, _simvarUtils.define)(`The main bus voltage. Use a bus index when referencing`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL AVIONICS BUS AMPS": (0, _simvarUtils.define)(`Avionics bus current`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL AVIONICS BUS VOLTAGE": (0, _simvarUtils.define)(`Avionics bus voltage`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL MAIN BUS AMPS": (0, _simvarUtils.define)(`Main bus current`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL TOTAL LOAD AMPS": (0, _simvarUtils.define)(`Total load amps`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "NEW ELECTRICAL SYSTEM": (0, _simvarUtils.define)(`Is the aircraft using the new Electrical System or the legacy FSX one`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const ALTERNATORS = {
  "ALTERNATOR BREAKER PULLED": (0, _simvarUtils.define)(`This will be true if the alternator breaker is pulled. Requires a BUS_LOOKUP_INDEX and an alternator index`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "ALTERNATOR CONNECTION ON": (0, _simvarUtils.define)(`This will be true if the alternator is connected. Requires a BUS_LOOKUP_INDEX and an alternator index`, _simvarUtils.Bool, _simvarUtils.Int32),
  "GENERAL ENG MASTER ALTERNATOR:index": (0, _simvarUtils.define)(`The alternator (generator) switch position, true if the switch is ON. Requires an engine index, and the use of an alternator index when referencing`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const APU = {
  "APU BLEED PRESSURE RECEIVED BY ENGINE": (0, _simvarUtils.define)(`Bleed air pressure received by the engine from the APU`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "APU GENERATOR ACTIVE:index": (0, _simvarUtils.define)(`Set or get whether an APU is active (true) or not (false). Takes an index to be able to have multiple generators on a single APU`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "APU GENERATOR SWITCH:index": (0, _simvarUtils.define)(`Enables or disables the APU for an engine. Takes an index to be able to have multiple generators on a single APU`, _simvarUtils.Bool, _simvarUtils.Int32),
  "APU ON FIRE DETECTED": (0, _simvarUtils.define)(`Will return true if the APU is on fire, or false otherwise`, _simvarUtils.Bool, _simvarUtils.Int32),
  "APU PCT RPM": (0, _simvarUtils.define)(`Auxiliary power unit RPM, as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "APU PCT STARTER": (0, _simvarUtils.define)(`Auxiliary power unit starter, as a percentage`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "APU SWITCH": (0, _simvarUtils.define)(`Boolean, whether or not the APU is switched on`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "APU VOLTS:index": (0, _simvarUtils.define)(`The volts from the APU to the selected engine. Takes an index to be able to have multiple generators on a single APU`, _simvarUtils.Volts, _simvarUtils.Float64),
  "BLEED AIR APU": (0, _simvarUtils.define)(`Boolean, returns whether or not the APU attempts to provide Bleed Air`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const BATTERIES = {
  "BATTERY BREAKER PULLED": (0, _simvarUtils.define)(`This will be true if the battery breaker is pulled. Requires a BUS LOOKUP INDEX and a battery index`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BATTERY CONNECTION ON": (0, _simvarUtils.define)(`This will be true if the battery is connected. Requires a BUS_LOOKUP_INDEX and a battery index`, _simvarUtils.Bool, _simvarUtils.Int32),
  "ELECTRICAL BATTERY BUS AMPS": (0, _simvarUtils.define)(`Battery bus current`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL BATTERY BUS VOLTAGE": (0, _simvarUtils.define)(`Battery bus voltage`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL BATTERY ESTIMATED CAPACITY PCT": (0, _simvarUtils.define)(`Battery capacity over max capacity, 100 is full`, _simvarUtils.Percent, _simvarUtils.Float64),
  "ELECTRICAL BATTERY LOAD": (0, _simvarUtils.define)(`The load handled by the battery (negative values mean the battery is receiving current). Use a battery index when referencing`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL BATTERY VOLTAGE": (0, _simvarUtils.define)(`The battery voltage. Use a battery index when referencing`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL HOT BATTERY BUS AMPS": (0, _simvarUtils.define)(`Current available when battery switch is turned off`, _simvarUtils.Amperes, _simvarUtils.SFloat64),
  "ELECTRICAL HOT BATTERY BUS VOLTAGE": (0, _simvarUtils.define)(`Voltage available when battery switch is turned off`, _simvarUtils.Volts, _simvarUtils.SFloat64),
  "ELECTRICAL MASTER BATTERY": (0, _simvarUtils.define)(`The battery switch position, true if the switch is ON. Use a battery index when referencing`, _simvarUtils.Bool, _simvarUtils.SInt32)
};
const BREAKERS = {
  "BREAKER ADF": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER ALTFLD": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER AUTOPILOT": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER AVNBUS1": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER AVNBUS2": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER AVNFAN": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER FLAP": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER GPS": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER INST": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER INSTLTS": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER NAVCOM1": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER NAVCOM2": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER NAVCOM3": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER TURNCOORD": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER WARN": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "BREAKER XPNDR": (0, _simvarUtils.define)(`Can be used to get or set the breaker state for the electrical system`, _simvarUtils.Bool, _simvarUtils.SInt32)
};
const CIRCUITS = {
  "CIRCUIT AUTOPILOT ON": (0, _simvarUtils.define)(`Is electrical power available to this circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT AUTO BRAKES ON": (0, _simvarUtils.define)(`Is electrical power available to this circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT AUTO FEATHER ON": (0, _simvarUtils.define)(`Is electrical power available to this circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT AVIONICS ON": (0, _simvarUtils.define)(`Is electrical power available to this circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT BREAKER PULLED": (0, _simvarUtils.define)(`This will be true if the circuit breaker is pulled. Requires a BUS_LOOKUP_INDEX and a circuit index.`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "CIRCUIT CONNECTION ON": (0, _simvarUtils.define)(`This will be true if the circuit is connected. Requires a BUS_LOOKUP_INDEX and a circuit index`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT FLAP MOTOR ON": (0, _simvarUtils.define)(`Is electrical power available to the flap motor circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT GEAR MOTOR ON": (0, _simvarUtils.define)(`Is electrical power available to the gear motor circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT GEAR WARNING ON": (0, _simvarUtils.define)(`Is electrical power available to gear warning circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT GENERAL PANEL ON": (0, _simvarUtils.define)(`Is electrical power available to the general panel circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT HYDRAULIC PUMP ON": (0, _simvarUtils.define)(`Is electrical power available to the hydraulic pump circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT MARKER BEACON ON": (0, _simvarUtils.define)(`Is electrical power available to the marker beacon circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT NAVCOM1 ON": (0, _simvarUtils.define)(`Whether or not power is available to the NAVCOM1 circuit.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT NAVCOM2 ON": (0, _simvarUtils.define)(`Whether or not power is available to the NAVCOM2 circuit.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT NAVCOM3 ON": (0, _simvarUtils.define)(`Whether or not power is available to the NAVCOM3 circuit.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT ON": (0, _simvarUtils.define)(`This will be true if the given circuit is functioning. Use a circuit index when referencing.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT PITOT HEAT ON": (0, _simvarUtils.define)(`Is electrical power available to the pitot heat circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT POWER SETTING": (0, _simvarUtils.define)(`This returns the percentage of use that the circuit is getting. This requires a circuit index when referencing`, _simvarUtils.Percent, _simvarUtils.Float64),
  "CIRCUIT PROP SYNC ON": (0, _simvarUtils.define)(`Is electrical power available to the propeller sync circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT STANDBY VACUUM ON": (0, _simvarUtils.define)(`Is electrical power available to the vacuum circuit`, _simvarUtils.Bool, _simvarUtils.Int32),
  "CIRCUIT SWITCH ON": (0, _simvarUtils.define)(`The circuit switch position, true if the switch is ON. Use a circuit index when referencing.`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const EXTERNAL_POWER = {
  "EXTERNAL POWER AVAILABLE": (0, _simvarUtils.define)(`This will be true if the given external power source is available. Use an external power index when referencing`, _simvarUtils.Bool, _simvarUtils.Int32),
  "EXTERNAL POWER BREAKER PULLED": (0, _simvarUtils.define)(`Boolean, The state of the breaker of an external power source`, _simvarUtils.Bool, _simvarUtils.SInt32),
  "EXTERNAL POWER CONNECTION ON": (0, _simvarUtils.define)(`Boolean, The state of the connection between a bus and an external power source`, _simvarUtils.Bool, _simvarUtils.Int32),
  "EXTERNAL POWER ON": (0, _simvarUtils.define)(`The external power switch position, true if the switch is ON. Use an external power index when referencing`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const AircraftElectricsVariables = exports.AircraftElectricsVariables = {
  ...GENERAL_BUSES,
  ...ALTERNATORS,
  ...APU,
  ...BATTERIES,
  ...BREAKERS,
  ...CIRCUITS,
  ...EXTERNAL_POWER
};