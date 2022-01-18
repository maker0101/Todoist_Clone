import Sidebar from './Sidebar';
import Content from './Content';

export default function Main({sidebarIsHidden}) {
	return (
		<section className="main">
			<Sidebar sidebarIsHidden={sidebarIsHidden} />
			<Content />
		</section>
	);
}
