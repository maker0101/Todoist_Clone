import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(false);

	return (
		<div className="App">
			<Router>
				<Header
					isSidebarHidden={isSidebarHidden}
					setIsSidebarHidden={setIsSidebarHidden}
				/>
				<Main isSidebarHidden={isSidebarHidden} />
			</Router>
		</div>
	);
}

export default App;
