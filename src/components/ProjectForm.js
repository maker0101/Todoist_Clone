import { useContext } from 'react';
import { db } from '../firebase';
import { VscTrash } from 'react-icons/vsc';
import useProjects from '../hooks/useProjects';
import useProjectForm from '../hooks/useProjectForm';
import useProjectModal from '../hooks/useProjectModal';
import { PROJECT_COLORS } from '../constants/project-colors';
import { getColorIdByName, getColorNameById } from '../utilities/get-color';
import { ProjectFormContext } from '../contexts/ProjectFormContext';

export default function ProjectForm() {
	const { projectForm, setProjectForm } = useContext(ProjectFormContext);
	const { setIsProjectModalOpen } = useProjectModal();
	const { handleProjectFormSubmit } = useProjectForm();
	const { handleDeleteProject } = useProjects();

	const inEditMode = projectForm.id ? true : false;
	const formTitle = inEditMode ? 'Edit project' : 'Add project';
	const primaryBtnText = inEditMode ? 'Save' : 'Add';

	return (
		<form
			className="projectForm"
			onSubmit={(e) =>
				handleProjectFormSubmit(
					e,
					db,
					projectForm,
					'userid1',
					setIsProjectModalOpen
				)
			}>
			<div className="projectForm__heading">
				<h1 className="projectForm__title">{formTitle}</h1>
			</div>
			<div className="projectForm__inputs">
				<label htmlFor="projectName">
					<h2>Name</h2>
				</label>
				<input
					required
					autoFocus
					className="projectForm__input projectForm__name"
					type="text"
					id="projectName"
					name="name"
					value={projectForm.name}
					onChange={(e) =>
						setProjectForm({ ...projectForm, name: e.target.value })
					}
				/>
				<label htmlFor="projectColors">
					<h2>Color</h2>
				</label>
				<div className="project__selects">
					<select
						required
						className="projectForm__input projectForm__select"
						id="projectColors"
						value={getColorNameById(projectForm.colorId)}
						onChange={(e) =>
							setProjectForm({
								...projectForm,
								colorId: getColorIdByName(e.target.value),
							})
						}>
						{PROJECT_COLORS.map((color) => (
							<option key={color.id} value={color.name}>
								{color.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="projectForm__buttons">
				<button
					className="button button__primary"
					type="submit"
					value=""
					disabled={projectForm.name ? false : true}>
					{primaryBtnText}
				</button>
				<button
					className="button button__secondary"
					type="button"
					onClick={() => setIsProjectModalOpen(false)}>
					Cancel
				</button>
				{inEditMode && (
					<VscTrash
						className="projectForm__delete"
						onClick={() =>
							handleDeleteProject(db, projectForm.id, setIsProjectModalOpen)
						}
					/>
				)}
			</div>
		</form>
	);
}
