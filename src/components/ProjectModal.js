import { useRef } from 'react';
import ProjectForm from './ProjectForm';
import useModal from '../hooks/useModal';

export default function ProjectModal({ setIsProjectModalOpen }) {
	const projectModalOverlayRef = useRef(null);
	const { closeModalOnOverlayClick } = useModal();

	const closeProjectModal = () => setIsProjectModalOpen(false);
	closeModalOnOverlayClick(projectModalOverlayRef, () =>
		setIsProjectModalOpen(false)
	);

	return (
		<div ref={projectModalOverlayRef} className="modal__bgOverlay">
			<div className="modal__formContainer">
				<ProjectForm
					setIsProjectModalOpen={setIsProjectModalOpen}
					closeProjectModal={closeProjectModal}
				/>
			</div>
		</div>
	);
}
