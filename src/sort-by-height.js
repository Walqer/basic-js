const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = arr.slice();
  let sorted = arr.sort((a,b) => a - b);
  sorted = sorted.filter(item => item != -1);
  let result = [];
  array.forEach((item) =>{
    if(item === -1){
      result.push(-1);
    } else{
      result.push(sorted.splice(0,1)[0]);
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};

