const convertToCelsius = function(tempFahrenheit) {
  //function to convert fahrenheit to celsius
  //formula: (fahrenheit - 32) * 5/9
  //return the result
  return Math.round(((tempFahrenheit - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  //function to convert celsius to fahrenheit
  //formula: (celsius * 9/5) + 32
  //round to 1 decimal
  //return the result
  return Math.round(((tempCelsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
