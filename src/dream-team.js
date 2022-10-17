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
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res;
  res =  members.filter(item => typeof item == 'string');
  // console.log(res);
  res = res.map(item => item.trim().toUpperCase()[0]);
  // console.log(res);
  res = res.sort();
  // console.log(res);
  res = res.join('');
  // console.log(res);
  return res;
}

module.exports = {
  createDreamTeam
};
