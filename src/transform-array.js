const { NotImplementedError } = require('../extensions/index.js');

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

  const arrRes = [];

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr[i + 1] ? i += 2 : null;
        break;
      case '--discard-prev':
        arr[i - 1] ? arrRes.pop() : null;
        break;
      case '--double-next':
        arr[i + 1] ? arrRes.push(arr[i + 1]) : null;
        break;
      case '--double-prev':
        arr[i - 1] ? arrRes.push(arr[i - 1]) : null;
        break;
      default:
        arrRes.push(arr[i]);
    }
  }

  return arrRes;
}

module.exports = {
  transform
};
