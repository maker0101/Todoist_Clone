import { MONTHS_OF_YEAR } from '../constants/months-of-year';

/**
 * Create Date object with harmonized time
 * @param {Date} date - e.g. 'Tue Jan 25 2022 08:37:08 GMT+0100'
 * @returns {Date} - date object with time set to 0 and GMT+01, e.g. 'Tue Jan 25 2022 00:00:00 GMT+0100'
 */
export const harmonizeDateTime = (date) => {
  return new Date(date.toDateString());
};

/**
 * Create date string with day as digit and abrreviated month as string text
 * @param {string} date - e.g. '2022-01-25'
 * @returns {string} - e.g. '25 Jan'
 */
export const dateToDayMonth = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = MONTHS_OF_YEAR[dateObject.getMonth()];
  return `${day} ${month}`;
};

/**
 * Create date string
 * @param {Date} date - e.g. 'Tue Jan 25 2022 08:37:08 GMT+0100'
 * @returns {string} - e.g. '2022-01-28'
 */
export const dateToYearMonthDay = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${year}-${month}-${day}`;
};
