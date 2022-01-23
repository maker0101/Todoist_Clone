import { useContext } from 'react';
import useCrudTasks from './useCrudTasks';
import { TaskFormContext } from '../contexts/TaskFormContext';

export default function useTaskForm() {
	const { taskForm, setTaskForm } = useContext(TaskFormContext);
	const { tasks, createTask, updateTask } = useCrudTasks();

	const clearTaskForm = (projectId) => {
		setTaskForm({
			id: '',
			name: '',
			description: '',
			dueDate: '',
			projectId: projectId,
		});
	};

	const autoSelectProjectId = (selectedProject) =>
		setTaskForm({
			...taskForm,
			projectId: selectedProject ? selectedProject : 'GtbY3fGVBVrTJmJH4IGd',
		});

	const populateTaskForm = (task) => {
		console.log(task);
		setTaskForm({
			id: task.id ? task.id : '',
			name: task.name ? task.name : '',
			description: task.description ? task.description : '',
			dueDate: task.dueDate ? task.dueDate : '',
			projectId: task.projectId ? task.projectId : '',
		});
		console.log(taskForm); // Why is always the t-1 selected task logged???
	};

	const handleTaskFormSubmit = (e, db, taskForm, userId, selectedProjectId) => {
		e.preventDefault();
		const taskExists =
			tasks.filter((task) => task.id === taskForm.id).length > 0;

		taskExists
			? updateTask(db, taskForm, userId)
			: createTask(db, taskForm, userId);

		clearTaskForm(selectedProjectId);
	};

	return {
		taskForm,
		setTaskForm,
		clearTaskForm,
		handleTaskFormSubmit,
		autoSelectProjectId,
		populateTaskForm,
	};
}
