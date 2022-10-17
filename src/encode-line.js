const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if (str.length > 0) {
    let count = 1;
    let value = str[0];
    let entry;
    for (let i = 1; i < str.length; ++i) {
      entry = str[i];
      if (entry == value) {
        count += 1;
      } else {
        result += count + '' + value;
        count = 1;
        value = entry;
      }
    }    
    result += count + '' + entry;
  }

  return result.replace(/1/g, ''); 
}

module.exports = {
  encodeLine
};
