import { VscInbox, VscCalendar } from 'react-icons/vsc';
import { IoTodayOutline } from 'react-icons/io5';

const sidebarNavData = [
	{
		id: 'GtbY3fGVBVrTJmJH4IGd',
		name: 'Inbox',
		to: '/inbox',
		icon: <VscInbox />,
		iconClassName: 'sidebar__iconInbox',
	},
	{
		id: 2,
		name: 'Today',
		to: '/today',
		icon: <IoTodayOutline />,
		iconClassName: 'sidebar__iconToday',
	},
	{
		id: 3,
		name: 'Upcoming',
		to: '/upcoming',
		icon: <VscCalendar />,
		iconClassName: 'sidebar__iconUpcoming',
	},
];

export { sidebarNavData };
