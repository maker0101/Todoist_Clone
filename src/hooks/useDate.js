import { monthsOfYear } from '../helper/monthsOfYear';
import { daysOfWeek } from '../helper/daysOfWeek';

export default function useDate() {
	const shortenDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth();
		return day.toString() + ' ' + monthsOfYear[month];
	};

	const calcUpcomingDays = (numDays) => {
		const daysArray = [];
		const thisDay = new Date();
		for (let i = 0; i < numDays; i++) {
			daysArray.push({
				id: i,
				date: new Date(thisDay),
				dateShort: shortenDate(thisDay),
				weekday: daysOfWeek[thisDay.getDay()],
				todayTomorrow: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : '',
			});
			thisDay.setDate(thisDay.getDate() + 1);
		}
		console.log(daysArray);
		return daysArray;
	};

	return { shortenDate, calcUpcomingDays };
}
