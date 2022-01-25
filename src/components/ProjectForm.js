import useProjects from '../hooks/useProjects';
import useProjectForm from '../hooks/useProjectForm';
import useProjectModal from '../hooks/useProjectModal';
import { PROJECT_COLORS } from '../constants/project-colors';

export default function ProjectForm({ closeProjectModal }) {
	console.log(PROJECT_COLORS);
	return (
		<form
			className="projectForm"
			onSubmit={() => console.log('Form submitted')}>
			<div className="projectForm__heading">
				<h1 className="projectForm__title">Add Project</h1>
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
					//value={}
					onChange={(e) => console.log(e)}
				/>
				<label htmlFor="projectColors">
					<h2>Color</h2>
				</label>
				<div className="project__selects">
					<select
						required
						className="projectForm__input projectForm__select"
						id="projectColors"
						//value={}
						onChange={(e) => console.log(e)}>
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
					disabled={false ? false : true}
					onClick={() => console.log('Add')}>
					Add
				</button>
				<button
					className="button button__secondary"
					type="button"
					onClick={() => closeProjectModal()}>
					Cancel
				</button>
			</div>
		</form>
	);
}
