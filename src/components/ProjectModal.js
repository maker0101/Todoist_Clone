import { useRef } from 'react';
import ProjectForm from './ProjectForm';
import useModal from '../hooks/useModal';
import useProjectModal from '../hooks/useProjectModal';

export default function ProjectModal() {
	const { setIsProjectModalOpen } = useProjectModal();
	const projectModalOverlayRef = useRef(null);
	const { closeModalOnOverlayClick } = useModal();

	closeModalOnOverlayClick(projectModalOverlayRef, () =>
		setIsProjectModalOpen(false)
	);

	return (
		<div ref={projectModalOverlayRef} className="modal__bgOverlay">
			<div className="modal__formContainer">
				<ProjectForm />
			</div>
		</div>
	);
}
