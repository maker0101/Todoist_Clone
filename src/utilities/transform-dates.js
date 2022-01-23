import { MONTHS_OF_YEAR } from '../constants/months-of-year';

export const dateToDayMonth = (dateString) => {
	const dateObject = new Date(dateString);
	const day = dateObject.getDate();
	const month = dateObject.getMonth();
	return day.toString() + ' ' + MONTHS_OF_YEAR[month];
};
