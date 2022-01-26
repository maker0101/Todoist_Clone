import { useContext } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import useTaskForm from './useTaskForm';

export default function useTaskModal() {
	const { setIsTaskModalOpen } = useContext(TaskModalContext);
	const { populateTaskForm } = useTaskForm();

	const handleTaskModalOpen = (task) => {
		populateTaskForm(task);
		setIsTaskModalOpen(true);
	};

	return {
		handleTaskModalOpen,
	};
}
