import useProjectForm from './useProjectForm';

export default function useProjectModal() {
	const { populateProjectForm } = useProjectForm();
	const openProjectModal = (setIsProjectModalOpen) =>
		setIsProjectModalOpen(true);

	const closeProjectModal = (setIsProjectModalOpen) =>
		setIsProjectModalOpen(false);

	const handleProjectModalOpen = (setIsProjectModalOpen, project) => {
		populateProjectForm(project);
		openProjectModal(setIsProjectModalOpen);
	};

	return { handleProjectModalOpen, closeProjectModal };
}
