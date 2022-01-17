import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import useProjects from '../hooks/useProjects';
import Task from '../components/Task';
import AddTask from '../components/AddTask';

export default function Project(props) {
	const [selectedProject, setSelectedProject] = useState({ name: '' });
	const [projectTasks, setProjectTasks] = useState(props.tasks);
	const { projectId } = useParams();
	const { filterTasksByProjectId } = useTasks();
	const { getSelectedProject } = useProjects();

	useEffect(
		() => getSelectedProject(props.projects, projectId, setSelectedProject),
		[projectId, props.projects]
	);
	useEffect(() => {
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
			<AddTask
				projects={props.projects}
				selectedProject={selectedProject}
				tasks={props.tasks}
			/>
		</div>
	);
}
