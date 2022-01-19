import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [sidebarIsHidden, setSidebarIsHidden] = useState(false);

	return (
		<div className="App">
			<Router>
				<Header
					sidebarIsHidden={sidebarIsHidden}
					setSidebarIsHidden={setSidebarIsHidden}
				/>
				<Main sidebarIsHidden={sidebarIsHidden} />
			</Router>
		</div>
	);
}

export default App;
