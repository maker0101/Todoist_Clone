import { useContext } from 'react';
import useCrudTasks from '../hooks/useCrudTasks';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { filterTasksByProjectId } from '../utilities/filter-tasks';

export default function Project(props) {
	const { selectedProject } = useContext(SelectedProjectContext);
	const { tasks } = useCrudTasks();

	return (
		<div className="content">
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{filterTasksByProjectId(tasks, selectedProject.id).map((task) => (
				<Task
					key={task.id}
					task={task}
					handleTaskModalOpen={props.handleTaskModalOpen}
				/>
			))}
			<AddTask selectedProjectId={selectedProject ? selectedProject.id : ''} />
		</div>
	);
}
