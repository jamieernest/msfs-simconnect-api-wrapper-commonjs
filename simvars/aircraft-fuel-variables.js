"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AircraftFuelVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Fuel_Variables.htm

// data types

// data units

const GENERAL = {
  "FUEL CROSS FEED:index": (0, _simvarUtils.define)(`Cross feed valve setting. This will return the current setting for the fuel crossfeed for the indexed engine, based on the current status of the simulation and the Cross Feed key events.`, _simvarUtils.Enum, _simvarUtils.Int32),
  "FUEL DUMP ACTIVE": (0, _simvarUtils.define)(`If 1 (TRUE) then the aircraft can dump fuel.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUEL DUMP SWITCH": (0, _simvarUtils.define)(`f set to 1 (TRUE) then the aircraft will dump fuel at the rate set by fuel_dump_rate parameter in the flight_model.cfg file.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUEL LEFT CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of all the tanks on the left side of the aircraft.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL LEFT QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of all the tanks on the left side of the aircraft.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL PUMP": (0, _simvarUtils.define)(`Currently not used within the simulation.`, _simvarUtils.Number, _simvarUtils.Int32),
  "FUEL RIGHT CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of all the tanks on the right side of the aircraft.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL RIGHT QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of all the tanks on the right side of the aircraft.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL SELECTED QUANTITY:index": (0, _simvarUtils.define)(`Quantity of fuel in the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the quantity of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors - or when using the modern fuel system - it will return the total fuel quantity available.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL SELECTED QUANTITY PERCENT:index": (0, _simvarUtils.define)(`Percent or capacity for the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the percentage of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors available - or when using the modern fuel system - it will return the percentage of total fuel quantity available.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "FUEL SELECTED TRANSFER MODE": (0, _simvarUtils.define)(`The method of transfer for the fuel. See documentation for available transfer options`, _simvarUtils.Enum, _simvarUtils.Int32),
  "FUEL TOTAL CAPACITY": (0, _simvarUtils.define)(`Total fuel capacity of the aircraft for all tanks.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TOTAL QUANTITY": (0, _simvarUtils.define)(`Current total quantity of fuel in volume for all tanks of the aircraft.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TOTAL QUANTITY WEIGHT": (0, _simvarUtils.define)(`Current total fuel weight for all tanks of the aircraft`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "FUEL TRANSFER PUMP ON:index": (0, _simvarUtils.define)(`Returns 1 (TRUE) if the indexed pump is active.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUEL WEIGHT PER GALLON": (0, _simvarUtils.define)(`The weight of the fuel, per gallon.`, _simvarUtils.Pounds, _simvarUtils.Float64),
  "NEW FUEL SYSTEM": (0, _simvarUtils.define)(`Will return 1 (TRUE) if the aircraft is using the modern [FUEL_SYSTEM] or 0 (FALSE) for the legacy [FUEL].`, _simvarUtils.Bool, _simvarUtils.Int32),
  "NUM FUEL SELECTORS": (0, _simvarUtils.define)(`The number of fuel selectors on the aircraft.`, _simvarUtils.Number, _simvarUtils.Int32),
  "UNLIMITED FUEL": (0, _simvarUtils.define)(`Will return 1 (TRUE) if the unlimited fuel flag has been enabled, or 0 (FALSE) otherwise.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "UNUSABLE FUEL TOTAL QUANTITY": (0, _simvarUtils.define)(`The total amount of fuel in all tanks of the aircraft which is not usable.`, _simvarUtils.Gallons, _simvarUtils.Float64)
};
const FUEL_SYSTEM = {
  "FUELSYSTEM JUNCTION SETTING:index": (0, _simvarUtils.define)(`This will return the current Option for the indexed junction. The index is the number of the line N component as defined by the Junction.N parameter.`, _simvarUtils.Number, _simvarUtils.Int32),
  "FUELSYSTEM LINE FUEL FLOW:index": (0, _simvarUtils.define)(`The fuel flowing through the indexed line in Gallons per Hour. The index is the number of the line N component as defined by the Line.N parameter.`, _simvarUtils.GallonsPerHour, _simvarUtils.Float64),
  "FUELSYSTEM LINE FUEL LEVEL:index": (0, _simvarUtils.define)(`The level of fuel in the indexed line in Gallons. The index is the number of the line N component as defined by the Line.N parameter.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUELSYSTEM LINE FUEL PRESSURE:index": (0, _simvarUtils.define)(`The pressure in the indexed fuel line, measured in KiloPascal. The index is the number of the line N component as defined by the Line.N parameter.`, _simvarUtils.KiloPascal, _simvarUtils.Float64),
  "FUELSYSTEM PUMP ACTIVE:index": (0, _simvarUtils.define)(`	Whether or not the indexed pump is actually active. The index is the number of the pump N component as defined by the Pump.N parameter.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUELSYSTEM PUMP SWITCH:index": (0, _simvarUtils.define)(`Whether or not the indexed pump is enabled. The index is the number of the pump N component as defined by the Pump.N parameter.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUELSYSTEM TANK CAPACITY:index": (0, _simvarUtils.define)(`Total capacity of the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUELSYSTEM TANK LEVEL:index": (0, _simvarUtils.define)(`Quantity of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUELSYSTEM TANK QUANTITY:index": (0, _simvarUtils.define)(`Quantity of fuel currently available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUELSYSTEM TANK TOTAL QUANTITY:index": (0, _simvarUtils.define)(`Total quantity of fuel available in the indexed fuel tank, including any unusable fuel. The index is the number of the tank N component as defined by the Tank.N parameter.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUELSYSTEM TANK WEIGHT:index": (0, _simvarUtils.define)(`Weight of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`, _simvarUtils.Pounds, _simvarUtils.SFloat64),
  "FUELSYSTEM TRIGGER STATUS:index": (0, _simvarUtils.define)(`Whether or not the indexed trigger is active. The index is the number of the trigger N component as defined by the Trigger.N parameter.`, _simvarUtils.Bool, _simvarUtils.Int32),
  "FUELSYSTEM VALVE OPEN:index": (0, _simvarUtils.define)(`Whether or not the indexed valve is actually fully opened. The index is the number of the valve N component as defined by the Valve.N parameter.`, _simvarUtils.PercentOver100, _simvarUtils.Float64),
  "FUELSYSTEM VALVE SWITCH:index": (0, _simvarUtils.define)(`Whether or not the indexed valve is set to be opened. The index is the number of the valve N component as defined by the Valve.N parameter.`, _simvarUtils.Bool, _simvarUtils.Int32)
};
const FUEL_TANKS = {
  "FUEL TANK CENTER CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of center tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK CENTER2 CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of center tank 2.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK CENTER3 CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of center tank 3.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK CENTER LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of center tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK CENTER2 LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of center tank 2.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK CENTER3 LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of center tank 3.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK CENTER QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of center tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK CENTER2 QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of center tank 2.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK CENTER3 QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of center tank 3.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK EXTERNAL1 CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of external tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK EXTERNAL2 CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of external tank 2.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK EXTERNAL1 LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of texternal tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK EXTERNAL2 LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of texternal tank 2.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK EXTERNAL1 QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of external tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK EXTERNAL2 QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of external tank 2.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK LEFT AUX CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the left auxiliary tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK LEFT AUX LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the left auxiliary tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK LEFT AUX QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the left auxiliary tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK LEFT MAIN CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the left main tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK LEFT MAIN LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the left main tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK LEFT MAIN QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the left main tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK LEFT TIP CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the left tip tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK LEFT TIP LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the left tip tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK LEFT TIP QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the left tip tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT AUX CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the right auxiliary tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK RIGHT AUX LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the right auxiliary tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT AUX QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the right auxiliary tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT MAIN CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the right main tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK RIGHT MAIN LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the right main tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT MAIN QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the right main tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT TIP CAPACITY": (0, _simvarUtils.define)(`Maximum capacity in volume of the right tip tank.`, _simvarUtils.Gallons, _simvarUtils.Float64),
  "FUEL TANK RIGHT TIP LEVEL": (0, _simvarUtils.define)(`Percent of maximum capacity of the right tip tank.`, _simvarUtils.PercentOver100, _simvarUtils.SFloat64),
  "FUEL TANK RIGHT TIP QUANTITY": (0, _simvarUtils.define)(`Current quantity in volume of the right tip tank.`, _simvarUtils.Gallons, _simvarUtils.SFloat64),
  "FUEL TANK SELECTOR:index": (0, _simvarUtils.define)(`Which tank the indexed selector is set to. The index is the selector to check (from 1 to 4), and the return value will be the Fuel Tank Selection index.`, _simvarUtils.Enum, _simvarUtils.Int32)
};
const AircraftFuelVariables = exports.AircraftFuelVariables = {
  ...GENERAL,
  ...FUEL_SYSTEM,
  ...FUEL_TANKS
};