export default function hasValuesFromArray(set, arr) {
  for (const i of arr) {
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}

// test the function

// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
