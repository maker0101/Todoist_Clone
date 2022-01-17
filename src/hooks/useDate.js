import { MONTHS_OF_YEAR } from '../helper/MONTHS_OF_YEAR';
import { DAYS_OF_WEEK } from '../helper/DAYS_OF_WEEK';

export default function useDate() {
	const shortenDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth();
		return day.toString() + ' ' + MONTHS_OF_YEAR[month];
	};

	const calcUpcomingDays = (numDays) => {
		const daysArray = [];
		const thisDay = new Date();
		for (let i = 0; i < numDays; i++) {
			daysArray.push({
				id: i,
				date: new Date(thisDay),
				dateShort: shortenDate(thisDay),
				weekday: DAYS_OF_WEEK[thisDay.getDay()],
				todayTomorrow: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : '',
			});
			thisDay.setDate(thisDay.getDate() + 1);
		}
		return daysArray;
	};

	return { shortenDate, calcUpcomingDays };
}
