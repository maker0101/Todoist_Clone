import { useRef } from 'react';
import ProjectForm from './ProjectForm';
import useModal from '../hooks/useModal';

export default function ProjectModal({ setIsProjectModalOpen }) {
	const projectModalOverlayRef = useRef(null);
	const { closeModalOnOverlayClick } = useModal();

	closeModalOnOverlayClick(projectModalOverlayRef, () =>
		setIsProjectModalOpen(false)
	);

	return (
		<div ref={projectModalOverlayRef} className="modal__bgOverlay">
			<div className="modal__formContainer">
				<ProjectForm setIsProjectModalOpen={setIsProjectModalOpen} />
			</div>
		</div>
	);
}
