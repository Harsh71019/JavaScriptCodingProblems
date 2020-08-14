const sum = 9;
const box = [1, 3, 5, 6, 9, 2];

//Using Brute force approach

function sumPair(arr, sum) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

sumPair(box, sum);

//Using object comparison method

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);

