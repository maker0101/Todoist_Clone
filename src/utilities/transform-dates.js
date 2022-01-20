import { MONTHS_OF_YEAR } from '../constants/months-of-year';

export const dateToDayMonth = (date) => {
	const day = date.getDate();
	const month = date.getMonth();
	return day.toString() + ' ' + MONTHS_OF_YEAR[month];
};

export const dateToFormInput = (date) =>
	date ? date.toISOString().split('T')[0] : '';

export const dateToDateWithoutTime = (date) => new Date(date.toDateString());

export const timestampToDate = (timestamp) =>
	new Date(new Date(timestamp.seconds * 1000).toDateString());
