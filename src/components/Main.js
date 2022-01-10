import Sidebar from './Sidebar';
import Content from './Content';

export default function Main() {
	return (
		<section className="main">
			<Sidebar />
			<Content />
		</section>
	);
}
