"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Volts = exports.StringV = exports.String32 = exports.String256 = exports.String128 = exports.SquareFeet = exports.SlugsPerCubicFeet = exports.Slugs = exports.Seconds = exports.SString32 = exports.SInt32 = exports.SFloat64 = exports.SETTABLE = exports.Ratio = exports.Rankine = exports.RadiansPerSecondSquared = exports.RadiansPerSecond = exports.Radians = exports.RPM = exports.PoundsPerHour = exports.Pounds = exports.Position128 = exports.Position = exports.PercentOver100 = exports.Percent = exports.PerRadian = exports.Number = exports.NullUnit = exports.NM = exports.Minutes = exports.MillimetersOfWater = exports.Millibars = exports.MetersPerSecond = exports.Meters = exports.Mask = exports.Mach = exports.MHz = exports.Knots = exports.KiloPascal = exports.KPH = exports.Int32 = exports.InchesOfMecury = exports.Inches = exports.Hz = exports.Hours = exports.GallonsPerHour = exports.Gallons = exports.GForce = exports.FootPounds = exports.FootPound = exports.Float64 = exports.Flags = exports.FeetPerSecond = exports.Feet = exports.Enum = exports.Degrees = exports.Centimeters = exports.Celsius = exports.Bool = exports.BCD16 = exports.Amperes = exports.ADF_BCD32 = void 0;
exports.dataType = dataType;
exports.define = define;
var _nodeSimconnect = require("node-simconnect");
const SETTABLE = exports.SETTABLE = true;
function dataType(typeName, settable = false) {
  return {
    data_type: _nodeSimconnect.SimConnectDataType[typeName.toUpperCase()],
    read: data => data[`read${typeName}`](),
    write: settable ? function (buffer, value) {
      if (value === true) value = 1;
      if (value === false) value = 0;
      buffer[`write${typeName}`](value);
      return buffer;
    } : function () {
      throw new Error(`SimVar "${this.name}" is not settable`);
    },
    settable
  };
}

// Convenience function
function define(desc, unit, type) {
  return {
    desc,
    ...unit,
    ...type
  };
}

// Specific data types
const Int32 = exports.Int32 = dataType(`Int32`);
const SInt32 = exports.SInt32 = dataType(`Int32`, SETTABLE);
const Float64 = exports.Float64 = dataType(`Float64`);
const SFloat64 = exports.SFloat64 = dataType(`Float64`, SETTABLE);
const String32 = exports.String32 = dataType(`String32`);
const SString32 = exports.SString32 = dataType(`String32`, SETTABLE);
const String128 = exports.String128 = dataType(`String128`);
const String256 = exports.String256 = dataType(`String256`);
const StringV = exports.StringV = dataType(`StringV`);

// Specific unit types
const Bool = exports.Bool = {
  units: `bool`
};
const Knots = exports.Knots = {
  units: `knots`
};
const Feet = exports.Feet = {
  units: `feet`
};
const Number = exports.Number = {
  units: `number`
};
const Degrees = exports.Degrees = {
  units: `degrees`
};
const Enum = exports.Enum = {
  units: `enum`
};
const Radians = exports.Radians = {
  units: `radians`
};
const Percent = exports.Percent = {
  units: `percent`
};
const PercentOver100 = exports.PercentOver100 = {
  units: `percent Over 100`
};
const NullUnit = exports.NullUnit = {
  units: null
};
const Pounds = exports.Pounds = {
  units: `pounds`
};
const Position = exports.Position = {
  units: `position`
};
const RPM = exports.RPM = {
  units: `RPM`
};
const Centimeters = exports.Centimeters = {
  units: `centimeters`
};
const Amperes = exports.Amperes = {
  units: `amperes`
};
const Volts = exports.Volts = {
  units: `volts`
};
const Mask = exports.Mask = {
  units: `mask`
};
const Rankine = exports.Rankine = {
  units: `rankine`
};
const PoundsPerHour = exports.PoundsPerHour = {
  units: `pounds per hour`
};
const GallonsPerHour = exports.GallonsPerHour = {
  units: `gallons per hour`
};
const Inches = exports.Inches = {
  units: `inches`
};
const Ratio = exports.Ratio = {
  units: `ratio`
};
const FootPound = exports.FootPound = {
  units: `foot pound`
};
const FootPounds = exports.FootPounds = {
  units: `foot pounds`
};
const Seconds = exports.Seconds = {
  units: `seconds`
};
const Minutes = exports.Minutes = {
  units: `minutes`
};
const Hours = exports.Hours = {
  units: `hours`
};
const Celsius = exports.Celsius = {
  units: `celsius`
};
const Gallons = exports.Gallons = {
  units: `gallons`
};
const RadiansPerSecond = exports.RadiansPerSecond = {
  units: `radians per second`
};
const GForce = exports.GForce = {
  units: `gforce`
};
const PerRadian = exports.PerRadian = {
  units: `per radian`
};
const Mach = exports.Mach = {
  units: `mach`
};
const SquareFeet = exports.SquareFeet = {
  units: `square feet`
};
const Slugs = exports.Slugs = {
  units: `slugs`
};
const FeetPerSecond = exports.FeetPerSecond = {
  units: `feet per second`
};
const RadiansPerSecondSquared = exports.RadiansPerSecondSquared = {
  units: `radians per second squared`
};
const ADF_BCD32 = exports.ADF_BCD32 = {
  units: `frequency ADF BCD32`
};
const Meters = exports.Meters = {
  units: `meters`
};
const MHz = exports.MHz = {
  units: `MHz`
};
const Flags = exports.Flags = {
  units: `Flags`
};
const Hz = exports.Hz = {
  units: `Hz`
};
const NM = exports.NM = {
  units: `nautical miles`
};
const BCD16 = exports.BCD16 = {
  units: `Frequency BCD16`
};
const MetersPerSecond = exports.MetersPerSecond = {
  units: `Meters per second`
};
const InchesOfMecury = exports.InchesOfMecury = {
  units: `Inches of Mercury`
};
const Millibars = exports.Millibars = {
  units: `Millibars`
};
const Position128 = exports.Position128 = {
  units: `position 128`
};
const KPH = exports.KPH = {
  units: `Kilometers per hour`
};
const SlugsPerCubicFeet = exports.SlugsPerCubicFeet = {
  units: `Slugs per cubic feet`
};
const MillimetersOfWater = exports.MillimetersOfWater = {
  units: `millimeters of water`
};
const KiloPascal = exports.KiloPascal = {
  units: `kilopascal`
};