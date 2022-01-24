import { useRef } from 'react';
import TaskForm from './TaskForm';
import useModal from '../hooks/useModal';
import useTaskModal from '../hooks/useTaskModal';

export default function TaskModal() {
	const { setIsTaskModalOpen } = useTaskModal();
	const { closeModalOnOverlayClick } = useModal();
	const taskModalOverlayRef = useRef(null);

	closeModalOnOverlayClick(taskModalOverlayRef, () =>
		setIsTaskModalOpen(false)
	);

	return (
		<div ref={taskModalOverlayRef} className="modal__bgOverlay">
			<div className="modal__formContainer">
				<TaskForm addedClassName="taskForm--inModal" />
			</div>
		</div>
	);
}
