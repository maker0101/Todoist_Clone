import { DAYS_OF_WEEK } from '../constants/DAYS_OF_WEEK';
import { shortenDate } from './shortenDate';

export const calcUpcomingDays = (numDays) => {
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
