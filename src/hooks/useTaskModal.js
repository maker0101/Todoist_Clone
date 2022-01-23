import { useContext, useEffect } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import useTaskForm from './useTaskForm';

export default function useTaskModal() {
	const { isTaskModalOpen, setIsTaskModalOpen } = useContext(TaskModalContext);
	const { populateTaskForm } = useTaskForm();

	const openTaskModal = (task) => {
		populateTaskForm(task);
		setIsTaskModalOpen(true);
	};

	const closeModalOnOverlayClick = (ref, handler) => {
		useEffect(() => {
			const listener = (event) => {
				const el = ref?.current;
				const modalOverlayWasClicked = el.className === event.target.className;

				if (!modalOverlayWasClicked) {
					return;
				}

				handler(event);
			};

			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		}, [ref, handler]);
	};

	return {
		isTaskModalOpen,
		setIsTaskModalOpen,
		openTaskModal,
		closeModalOnOverlayClick,
	};
}
