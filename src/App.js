import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [sidebarIsHidden, setSidebarIsHidden] = React.useState(false);

	return (
		<div className="App">
			<Header sidebarIsHidden={sidebarIsHidden} setSidebarIsHidden={setSidebarIsHidden} />
			<Main sidebarIsHidden={sidebarIsHidden} />
		</div>
	);
}

export default App;
