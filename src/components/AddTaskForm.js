import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';

export default function AddTaskForm() {
	const [addTaskInput, setAddTaskInput] = React.useState('');

	async function addTodo(e) {
		e.preventDefault();

		const docRef = await addDoc(collection(db, 'tasks'), {
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
			<input type="submit" onClick={addTodo} />
		</form>
	);
}
