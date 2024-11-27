const removeFromArray = function (myArray, ...itemsToRemove) {
  result = [];
  myArray.forEach((element) => {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  })
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
