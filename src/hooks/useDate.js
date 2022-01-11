export default function useDate() {
	const transformDueDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth();
		const monthsArray = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		return day.toString() + ' ' + monthsArray[month];
	};

	return { transformDueDate };
}
