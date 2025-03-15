'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let separator = '';

  const separators = ['/', '.', '-'];

  separators.forEach((sep) => {
    if (date.includes(sep)) {
      separator = sep;
    }
  });

  const dateParts = date.split(separator);

  const dateMap = {};

  fromFormat.forEach((format, index) => {
    dateMap[format] = dateParts[index];
  });

  let newDate = '';

  for (let i = 0; i < toFormat.length; i++) {
    const format = toFormat[i];

    if (format === 'YYYY') {
      const year = dateMap['YY'];

      newDate += (year < 30 ? '20' : '19') + year;
    } else {
      newDate += dateMap[format];
    }

    if (i < toFormat.length - 1) {
      newDate += separator;
    }
  }

  return newDate;
}

module.exports = formatDate;
