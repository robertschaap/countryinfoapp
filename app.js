const fs = require('fs');
const jsonFileReader = require('./json-file-reader.js');
var fileName = './countries.json';

jsonFileReader.myParser(fileName, jsonFileReader.filterCountryData;
