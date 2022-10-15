const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  if(!Array.isArray(team)){
    return false;
  }
  let result = [];
  team.forEach(element => {
    if(typeof element == 'string'){
      let str = element.trim();
      str = str.toUpperCase();
      result.push(str[0]);
    }
    
  });
  result = result.sort();
  result =  result.join('');
  return result;
}

module.exports = {
  createDreamTeam
};



