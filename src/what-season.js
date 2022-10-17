const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  
  let month = '';

  try {
    month = date.getMonth();

  } catch {
    throw new Error('Invalid date!');
  }

  const season = Math.floor((month === 11 ? 0 : month + 1) / 3);
  let res = "";
  switch (season) {
    case 0: return "winter";
    case 1: return "spring";
    case 2: return "summer";
    case 3: return "autumn";
  }
}

console.log(getSeason(new Date(2020, 02, 31)));// => 'spring'

module.exports = {
  getSeason
};
