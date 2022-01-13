import React from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import useProjects from '../hooks/useProjects';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

export default function Project(props) {
	const [selectedProject, setSelectedProject] = React.useState({ name: '' });
	const [projectTasks, setProjectTasks] = React.useState(props.tasks);
	const { projectId } = useParams();
	const { filterTasksByProjectId } = useTasks();
	const { getSelectedProject } = useProjects();

	React.useEffect(
		() => getSelectedProject(props.projects, projectId, setSelectedProject),
		[projectId, props.projects]
	);
	React.useEffect(() => {
		setProjectTasks(filterTasksByProjectId(props.tasks, projectId));
	}, [projectId, props.tasks]);

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">
					{selectedProject && selectedProject.name}
				</h1>
				<ul className="tasksList">
					{projectTasks.map((task) => (
						<Task key={task.id} task={task} />
					))}
					<TaskForm
						projects={props.projects}
						selectedProject={selectedProject}
					/>
				</ul>
			</div>
		</div>
	);
}
