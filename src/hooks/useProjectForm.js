//import clearProjectForm
import useProjects from './useProjects';

export default function useProjectForm() {
	const { projects, updateProject, createProject } = useProjects();

	const clearProjectForm = (setProjectForm) => {
		setProjectForm({
			name: '',
			colorId: 7,
			isInbox: false,
			userId: 'userid1',
		});
	};

	const handleProjectFormSubmit = (
		e,
		db,
		projectForm,
		setProjectForm,
		userId,
		closeProjectModal
	) => {
		e.preventDefault();

		const projectExists =
			projects.filter((project) => project.id === projectForm.id).length > 0;

		if (projectExists) {
			updateProject(db, projectForm, userId);
		} else {
			createProject(db, projectForm, userId);
		}

		closeProjectModal();
		clearProjectForm(setProjectForm);
	};

	return { handleProjectFormSubmit };
}
