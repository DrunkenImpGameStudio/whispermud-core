'use strict';

const TelnetSequences = {
    IAC     : 255,
    DONT    : 254,
    DO      : 253,
    WONT    : 252,
    WILL    : 251,
    SB      : 250,
    SE      : 240,
    GA      : 249,
    EOR     : 239,
  };
  
exports.TelnetSequences = TelnetSequences;