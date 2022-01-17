import { MONTHS_OF_YEAR } from '../constants/MONTHS_OF_YEAR';

export const shortenDate = (date) => {
	const day = date.getDate();
	const month = date.getMonth();
	return day.toString() + ' ' + MONTHS_OF_YEAR[month];
};
