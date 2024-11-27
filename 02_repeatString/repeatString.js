const repeatString = function (string, frequency) {
  if (frequency < 0) {
    return 'ERROR'
  }
  result = '';
  for (let i = 0; i < frequency; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
