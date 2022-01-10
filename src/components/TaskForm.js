import React from 'react';
import { db } from '../firebase';
import useTasks from '../hooks/useTasks';

export default function TaskForm(props) {
	const [taskForm, setTaskForm] = React.useState({ name: '', description: '' });
	const { createTask } = useTasks();

	return (
		<form
			className="addTaskForm"
			onSubmit={(e) =>
				createTask(
					e,
					db,
					taskForm.name,
					taskForm.description,
					'userid1',
					'Kl3wXRZLUlto7XcA7mWd',
					setTaskForm
				)
			}
		>
			<div className="addTaskForm__inputContainer">
				<input
					className="input input__name"
					type="text"
					id="taskName"
					name="name"
					value={taskForm.name}
					placeholder="Task name"
					onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
				/>
				<textarea
					className="input input__description"
					type="text"
					id="taskDescription"
					name="description"
					value={taskForm.description}
					placeholder="Description"
					onChange={(e) =>
						setTaskForm({ ...taskForm, description: e.target.value })
					}
				/>
			</div>
			<input className="button__primary" type="submit" value="Add Task" />
		</form>
	);
}