import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';

export default function AddProjectForm() {
	const [addProjectInput, setAddProjectInput] = React.useState('');

	function addProject(e) {
		e.preventDefault();

		addDoc(collection(db, 'projects'), {
			id: '9',
			name: addProjectInput,
			userId: 'userid1',
		});

		setAddProjectInput('');
	}

	return (
		<form>
			<input
				type="text"
				id="projectName"
				name="name"
				value={addProjectInput}
				onChange={(e) => setAddProjectInput(e.target.value)}
			/>
			<input type="submit" onClick={addProject} />
		</form>
	);
}
