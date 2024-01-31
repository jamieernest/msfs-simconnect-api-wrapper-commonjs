"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentVariables = void 0;
var _simvarUtils = require("./simvar-utils.js");
// data types

// data units

const EnvironmentVariables = exports.EnvironmentVariables = {
  "ABSOLUTE TIME": (0, _simvarUtils.define)(`This returns the seconds since 12:00 am 1/1/1AD Zulu Time.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "ZULU TIME": (0, _simvarUtils.define)(`This returns the seconds since midnight (00:00 Zulu Time) on the current day.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "ZULU DAY OF WEEK": (0, _simvarUtils.define)(`This returns the current Zulu Time day of the week as an integer value between 0 and 6 (inclusive), where 0 is Monday and 6 is Sunday.`, _simvarUtils.Number, _simvarUtils.Float64),
  "ZULU DAY OF MONTH": (0, _simvarUtils.define)(`This returns the current Zulu Time day of the month as an integer value between 1 and 31 (inclusive).`, _simvarUtils.Number, _simvarUtils.Float64),
  "ZULU MONTH OF YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "ZULU DAY OF YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "ZULU YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "ZULU SUNRISE TIME": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "ZULU SUNSET TIME": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "LOCAL TIME": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "LOCAL DAY OF WEEK": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "LOCAL DAY OF MONTH": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "LOCAL MONTH OF YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "LOCAL DAY OF YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "LOCAL YEAR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "TIME ZONE OFFSET": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "TIME OF DAY": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "TOOLTIP UNITS": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "UNITS OF MEASURE": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "SIMULATION RATE": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "SIMULATION TIME": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Seconds, _simvarUtils.Float64),
  "SIMULATION DELTA TIME": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Number, _simvarUtils.Float64),
  "IS IN VR": (0, _simvarUtils.define)(`This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`, _simvarUtils.Bool, _simvarUtils.Int32)
};