import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Main(props) {
	return (
		<section className="main">
			<Sidebar sidebarIsHidden={props.sidebarIsHidden} />
			<Content />
		</section>
	);
}
