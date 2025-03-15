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
  const separators = [...new Set(date.match(/[^A-Za-z0-9]/g))];

  if (separators.length === 0) {
    throw new Error('No valid separators found in input date');
  }

  const dateParts = date.split(new RegExp(`[${separators.join('')}]`));

  const dateMap = {};

  fromFormat.forEach((format, index) => {
    dateMap[format] = dateParts[index];
  });

  if (dateMap.YY || dateMap.YYYY) {
    const year = dateMap.YYYY || dateMap.YY;

    if (year.length === 2) {
      dateMap.YYYY = parseInt(year, 10) < 30 ? `20${year}` : `19${year}`;
    }
    dateMap.YY = dateMap.YYYY.slice(-2);
  }

  const toSeparator =
    toFormat.find((char) => ['/', '.', '-'].includes(char)) || '-';

  const newDate = toFormat
    .filter((format) => format !== toSeparator)
    .map((format) => dateMap[format] || format)
    .join(toSeparator);

  return newDate;
}

module.exports = formatDate;
