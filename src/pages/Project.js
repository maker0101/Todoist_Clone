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
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{projectTasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
			<TaskForm projects={props.projects} selectedProject={selectedProject} tasks={props.tasks} />
		</div>
	);
}
