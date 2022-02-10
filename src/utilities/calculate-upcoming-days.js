import { DAYS_OF_WEEK } from '../constants/days-of-week';
import { dateToDayMonth, dateToYearMonthDay } from './transform-dates';

export const calculateUpcomingDays = (numDays) => {
  const daysArray = [];
  const thisDay = new Date();

  for (let i = 0; i < numDays; i++) {
    daysArray.push({
      id: i,
      date: new Date(thisDay),
      dateAsYearMonthDay: dateToYearMonthDay(thisDay),
      dateAsDayMonth: dateToDayMonth(thisDay),
      weekday: DAYS_OF_WEEK[thisDay.getDay()],
      todayTomorrow: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : '',
    });
    thisDay.setDate(thisDay.getDate() + 1);
  }

  return daysArray;
};
