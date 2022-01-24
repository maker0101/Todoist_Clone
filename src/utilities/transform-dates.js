import { MONTHS_OF_YEAR } from '../constants/months-of-year';

export const dateToDayMonth = (dateString) => {
	const dateObject = new Date(dateString);
	const day = dateObject.getDate();
	const month = dateObject.getMonth();
	return day.toString() + ' ' + MONTHS_OF_YEAR[month];
};

export const dateToYearMonthDay = (dateObject) => {
	const day = dateObject.getDate();
	let month = dateObject.getMonth() + 1;
	const year = dateObject.getFullYear();

	if (day < 10) day = `0${day}`;
	if (month === 1) month = `0${month}`;

	return `${year}-${month}-${day}`;
};
