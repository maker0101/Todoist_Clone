import useProjects from '../hooks/useProjects';
import useProjectForm from '../hooks/useProjectForm';
import useProjectModal from '../hooks/useProjectModal';

export default function ProjectForm({ closeProjectModal }) {
	return (
		<form onSubmit={() => console.log('Form submitted')}>
			<div className="projectForm__inputs">
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
				<div className="project__selects">
					<select
						className="projectForm__select"
						//value={}
						onChange={(e) => console.log(e)}></select>
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
