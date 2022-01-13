import { monthsOfYear } from '../helper/monthsOfYear';
import { daysOfWeek } from '../helper/daysOfWeek';

export default function useDate() {
	const transformDueDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth();
		return day.toString() + ' ' + monthsOfYear[month];
	};

	const calcUpcomingDays = (numOfDays) => {
		const daysArray = [];
		for (let i = 0; i < numOfDays; i++) {
			const startDay = new Date();
			let dayAfter = new Date();
			dayAfter.setDate(startDay.getDate() + i);
			daysArray.push({
				id: i,
				date: dayAfter,
				dateShort: transformDueDate(dayAfter),
				weekday: daysOfWeek[dayAfter.getDay() - 1],
				special: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : '',
			});
		}
		return daysArray;
	};

	return { transformDueDate, calcUpcomingDays };
}
