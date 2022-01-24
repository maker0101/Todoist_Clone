import { db } from '../firebase';
import useProjects from '../hooks/useProjects';
import useTaskForm from '../hooks/useTaskForm';
import useTaskModal from '../hooks/useTaskModal';

export default function TaskForm({
	selectedProjectId,
	setIsTaskFormOpen,
	addedClassName,
}) {
	const { projects } = useProjects();
	const { taskForm, setTaskForm, handleTaskFormSubmit, handleTaskFormCancel } =
		useTaskForm();
	const { isTaskModalOpen, setIsTaskModalOpen } = useTaskModal();

	return (
		<form
			className={`taskForm ${addedClassName}`}
			onSubmit={(e) => {
				handleTaskFormSubmit(e, db, taskForm, 'userid1', selectedProjectId);
			}}>
			<div className="taskForm__inputs">
				<input
					required
					autoFocus
					className="taskform__input taskForm__name"
					type="text"
					id="taskName"
					name="name"
					value={taskForm.name}
					placeholder="Task name"
					onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
				/>
				<textarea
					className="taskform__input taskForm__description"
					type="text"
					id="taskDescription"
					name="description"
					value={taskForm.description}
					placeholder="Description"
					onChange={(e) =>
						setTaskForm({ ...taskForm, description: e.target.value })
					}
				/>
				<div className="task__selects">
					<input
						className="taskForm__select"
						type="date"
						placeholder="Schedule"
						value={taskForm.dueDate}
						onChange={(e) => {
							setTaskForm({ ...taskForm, dueDate: e.target.value });
						}}
					/>
					<select
						className="taskForm__select"
						value={taskForm.projectId}
						onChange={(e) =>
							setTaskForm({ ...taskForm, projectId: e.target.value })
						}>
						{projects.map((project) => (
							<option key={project.id} value={project.id}>
								{project.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="taskForm__buttons">
				<button
					className="button button__primary"
					type="submit"
					value=""
					disabled={taskForm.name ? false : true}>
					{isTaskModalOpen ? 'Save' : 'Add Task'}
				</button>
				<button
					className="button button__secondary"
					type="button"
					onClick={() =>
						handleTaskFormCancel(
							isTaskModalOpen,
							setIsTaskModalOpen,
							setIsTaskFormOpen,
							selectedProjectId
						)
					}>
					Cancel
				</button>
			</div>
		</form>
	);
}
