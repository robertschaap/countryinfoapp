const fs = require('fs');
var convertedData = [];
const parameterToFind = process.argv[2];

function filterCountryData(countryData) {
    convertedData.filter(x => x.name == parameterToFind).map(x => console.log(`Country: ${x.name}, Top Level Domain: ${x.topLevelDomain}`));
}

function myParser(fileToRead, functionToApply) {
    fs.readFile(fileToRead, function (err, data) {
        if (err) {
            throw err
        }
        convertedData = JSON.parse(data.toString());
        functionToApply(convertedData);
    });
}

module.exports = {
    myParser: myParser,
    filterCountryData: filterCountryData
}
