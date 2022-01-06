import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';

export default function AddTaskForm() {
	const [addTaskInput, setAddTaskInput] = React.useState('');

	// Questions and TODO:
	// 1.) How to extract this function and put it in a custom hook file 'addTask.js'?
	// There are references to the state inside the function, but also extracting the state
	// away into 'addTask.js' would break the references to the state inside the returned JSX.
	function addTask(e) {
		e.preventDefault();

		addDoc(collection(db, 'tasks'), {
			id: '555',
			name: addTaskInput,
			projectId: '1',
			userId: 'userid1',
		});

		setAddTaskInput('');
	}

	return (
		<form>
			<input
				type="text"
				id="taskName"
				name="name"
				value={addTaskInput}
				onChange={(e) => setAddTaskInput(e.target.value)}
			/>
			<input type="submit" onClick={addTask} />
		</form>
	);
}
