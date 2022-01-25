import { MONTHS_OF_YEAR } from '../constants/months-of-year';

// Input: Date object, e.g. 'Tue Jan 25 2022 08:37:08 GMT+0100'
// Output: Date object, e.g. 'Tue Jan 25 2022 00:00:00 GMT+0100'
export const harmonizeDateTime = (dateObject) => {
	return new Date(dateObject.toDateString());
};

// Input: String
// Output: String, e.g. '25 Jan'
export const dateToDayMonth = (dateString) => {
	const dateObject = new Date(dateString);
	const day = dateObject.getDate();
	const month = dateObject.getMonth();
	return day.toString() + ' ' + MONTHS_OF_YEAR[month];
};

// Input: Date object, e.g. 'Tue Jan 25 2022 08:37:08 GMT+0100'
// Output: String, 'YYYY-MM-DD'
export const dateToYearMonthDay = (dateObject) => {
	const day = dateObject.getDate();
	let month = dateObject.getMonth() + 1;
	const year = dateObject.getFullYear();

	if (day < 10) day = `0${day}`;
	if (month === 1) month = `0${month}`;

	return `${year}-${month}-${day}`;
};
