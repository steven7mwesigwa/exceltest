if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('dados.xlsx');
console.log(workbook);