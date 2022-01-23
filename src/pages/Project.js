import { useContext } from 'react';
import useFilterTasks from '../hooks/useFilterTasks';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';

export default function Project(props) {
	const { selectedProject } = useContext(SelectedProjectContext);
	const { filterTasksByProjectId } = useFilterTasks();

	return (
		<div className="content">
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{filterTasksByProjectId(selectedProject.id).map((task) => (
				<Task key={task.id} task={task} openTaskModal={props.openTaskModal} />
			))}
			<AddTask selectedProjectId={selectedProject ? selectedProject.id : ''} />
		</div>
	);
}
