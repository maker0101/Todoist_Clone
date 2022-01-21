import { useRef } from 'react';
import TaskForm from './TaskForm';
import useTaskModal from '../hooks/useTaskModal';

export default function TaskModal() {
	const { closeModalOnOverlayClick, setIsTaskModalOpen } = useTaskModal();

	const overlayReference = useRef(null);
	closeModalOnOverlayClick(overlayReference, () => setIsTaskModalOpen(false));

	return (
		<div ref={overlayReference} className="modal__bgOverlay">
			<div className="modal__formContainer">
				<TaskForm addedClassName="taskForm--inModal" />
			</div>
		</div>
	);
}
