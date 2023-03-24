var fs = require('fs'); 
var parse = require('csv-parse');

var csvFile = 'list.csv';

var csvData=[];
fs.createReadStream( csvFile )
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      console.log(csvData);
    });