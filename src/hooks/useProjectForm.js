import { useContext } from 'react';
import useProjects from './useProjects';
import { ProjectFormContext } from '../contexts/ProjectFormContext';

export default function useProjectForm() {
	const { projectForm, setProjectForm } = useContext(ProjectFormContext);
	const { projects, updateProject, createProject } = useProjects();

	const clearProjectForm = () => {
		setProjectForm({
			name: '',
			colorId: 7,
			isInbox: false,
			userId: 'userid1',
		});
	};

	const populateProjectForm = (project = {}) => {
		let populatedProjectForm;
		if (project) {
			populatedProjectForm = {
				id: project.id ? project.id : '',
				name: project.name ? project.name : '',
				isInbox: project.isInbox ? project.isInbox : false,
				colorId: project.colorId ? project.colorId : 7,
				userId: project.userId ? project.userId : 'userid1',
			};
		} else {
			populatedProjectForm = {
				name: '',
				colorId: 7,
				isInbox: false,
				userId: 'userid1',
			};
		}

		setProjectForm(populatedProjectForm);
	};

	const handleProjectFormSubmit = (
		e,
		db,
		projectForm,
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
		clearProjectForm();
	};

	return {
		projectForm,
		setProjectForm,
		clearProjectForm,
		handleProjectFormSubmit,
		populateProjectForm,
	};
}
