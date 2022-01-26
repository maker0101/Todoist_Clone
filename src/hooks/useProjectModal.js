import { useContext } from 'react';
import useProjectForm from './useProjectForm';
import { ProjectModalContext } from '../contexts/ProjectModalContext';

export default function useProjectModal() {
	const { isProjectModalOpen, setIsProjectModalOpen } = useContext(ProjectModalContext);
	const { populateProjectForm } = useProjectForm();

	const handleProjectModalOpen = (setIsProjectModalOpen, project) => {
		populateProjectForm(project);
		setIsProjectModalOpen(true);;
	};

	return { isProjectModalOpen, setIsProjectModalOpen, handleProjectModalOpen };
}
