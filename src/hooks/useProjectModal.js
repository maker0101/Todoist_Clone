import useProjectForm from './useProjectForm';

export default function useProjectModal() {
	const { populateProjectForm } = useProjectForm();

	const handleProjectModalOpen = (setIsProjectModalOpen, project) => {
		populateProjectForm(project);
		setIsProjectModalOpen(true);;
	};

	return { handleProjectModalOpen };
}
