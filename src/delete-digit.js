const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let result = n.toString();
  result = result.split('');
  let finish = [];
  if(result.length === 2 && result.indexOf('0')){
   if(result.indexOf('0') === 1){
    return +result[0];
   } else{
    return +result[1];
   }
  }
  for(let i = 0; i < result.length; i++){
    if(result[i] < result[i + 1]){
      continue;
    } else{
      finish.push(result[i]);
    }
  }

  finish = finish.join('');
  return +finish;
}

module.exports = {
  deleteDigit
};

console.log(  deleteDigit(10));
