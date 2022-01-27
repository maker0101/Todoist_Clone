import { VscInbox, VscCalendar } from 'react-icons/vsc';
import { IoTodayOutline } from 'react-icons/io5';

export const SIDEBAR_NAV_DATA = [
  {
    id: 'GtbY3fGVBVrTJmJH4IGd',
    name: 'Inbox',
    to: '/inbox',
    icon: <VscInbox />,
    iconClassName: 'sidebar__iconInbox',
    iconColor: '#246fe0',
  },
  {
    id: 2,
    name: 'Today',
    to: '/today',
    icon: <IoTodayOutline />,
    iconClassName: 'sidebar__iconToday',
    iconColor: '#058527',
  },
  {
    id: 3,
    name: 'Upcoming',
    to: '/upcoming',
    icon: <VscCalendar />,
    iconClassName: 'sidebar__iconUpcoming',
    iconColor: '#692fc2',
  },
];
