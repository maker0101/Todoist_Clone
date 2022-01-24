import { useContext } from 'react';
import useCrudTasks from './useCrudTasks';
import { TaskFormContext } from '../contexts/TaskFormContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';

export default function useTaskForm() {
	const { taskForm, setTaskForm } = useContext(TaskFormContext);
	const { selectedProject } = useContext(SelectedProjectContext);
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

	const populateTaskForm = (task) => {
		let initialTaskForm;
		if (task) {
			initialTaskForm = {
				id: task.id ? task.id : '',
				name: task.name ? task.name : '',
				description: task.description ? task.description : '',
				dueDate: task.dueDate ? task.dueDate : '',
				projectId: task.projectId
					? task.projectId
					: selectedProject
					? selectedProject.id
					: 'GtbY3fGVBVrTJmJH4IGd',
			};
		} else {
			initialTaskForm = {
				id: '',
				name: '',
				description: '',
				dueDate: '',
				projectId: selectedProject
					? selectedProject.id
					: 'GtbY3fGVBVrTJmJH4IGd',
			};
		}

		setTaskForm(initialTaskForm);
	};

	const handleTaskFormOpen = (setIsTaskFormOpen) => {
		populateTaskForm();
		setIsTaskFormOpen(true);
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

	const handleTaskFormCancel = (
		isTaskModalOpen,
		setIsTaskModalOpen,
		setIsTaskFormOpen,
		selectedProjectId
	) => {
		isTaskModalOpen ? setIsTaskModalOpen(false) : setIsTaskFormOpen(false);
		clearTaskForm(selectedProjectId);
	};

	return {
		taskForm,
		setTaskForm,
		clearTaskForm,
		populateTaskForm,
		handleTaskFormOpen,
		handleTaskFormSubmit,
		handleTaskFormCancel,
	};
}
