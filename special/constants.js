"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT = exports.SIMCONNECT_FACILITY_AIRPORT = exports.RUNWAY_SURFACES = exports.RUNWAY_NUMBER = exports.RUNWAY_DESIGNATOR = exports.ILS_TYPES = void 0;
const RUNWAY_SURFACES = exports.RUNWAY_SURFACES = [`concrete`, `grass`, `water fsx`, `grass bumpy`, `asphalt`, `short grass`, `long grass`, `hard turf`, `snow`, `ice`, `urban`, `forest`, `dirt`, `coral`, `gravel`, `oil treated`, `steel mats`, `bituminus`, `brick`, `macadam`, `planks`, `sand`, `shale`, `tarmac`, `wright flyer track`, `ocean`, `water`, `pond`, `lake`, `river`, `waste water`, `paint`];
RUNWAY_SURFACES[254] = `unknown`;
const RUNWAY_NUMBER = exports.RUNWAY_NUMBER = [`none`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `north`, `northeast`, `east`, `southeast`, `south`, `southwest`, `west`, `northwest`, `last`];
const RUNWAY_DESIGNATOR = exports.RUNWAY_DESIGNATOR = [`none`, `left`, `right`, `center`, `water`, `a`, `b`, `last`];
const ILS_TYPES = exports.ILS_TYPES = {
  0: `none`,
  65: `airport`,
  86: `VOR`,
  78: `NDB`,
  87: `waypoint`
};
const SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT = exports.SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT = 0;
const SIMCONNECT_FACILITY_AIRPORT = exports.SIMCONNECT_FACILITY_AIRPORT = 1000;
