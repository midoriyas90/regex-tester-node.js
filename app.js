"use strict";
const Test = require('./TestRegex.js');

var UserArgs = process.argv.splice(2);
var input = UserArgs[0];
const regex  = new RegExp (input,"gm");
var str = [];

var getStringInput = () => {
  for (let i = 1 ; i < UserArgs.length ; i++ )
  {
    str.push(UserArgs[i]);
  }
};
getStringInput();
var Start = Test.Verify(regex,str);
