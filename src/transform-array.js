const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '--double-next') {
      if(i === array.length - 1){
        array.pop();
      } else{
        array[i] = array[i + 1];
      }

    } else if (array[i] == '--discard-prev') {
      if (i === 0) {
        array.splice(array[i - 1], 1);
      } else {
         array.splice(array[i - 2], 2);
      }
    } else if (array[i] == '--discard-next') {
      if(i === array.length - 1){
        array.pop();
      } else{
        array.splice(array[i - 1], 2);
      }

    } else if (array[i] == '--double-prev') {
      if(i === 0){
        array.shift();
      } else{
        array[i] = array[i - 1];
      }

    }
  }
  return array;
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])); //  => output: [1, 2, 3, 4, 5]





// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.
