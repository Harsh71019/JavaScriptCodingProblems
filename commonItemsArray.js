const { array } = require("prop-types");

const array1 = ["a", "b", "x", "i", "e"];
const array2 = ["g", "h", "j", "i", "l"];

//Using Brute force!

function compareItemsInArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

compareItemsInArray(array1, array2);

//Using the object method

function compareArrayUsingObjectForReducingTimeComplexity(arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr1.length; j++) {
	if(map[arr2[j]]) {
		return true;
	}
  }
  return false;
}

compareArrayUsingObjectForReducingTimeComplexity(array1,array2)
