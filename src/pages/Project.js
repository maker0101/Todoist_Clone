import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFilterTasks from '../hooks/useFilterTasks';
import useProjects from '../hooks/useProjects';
import Task from '../components/Task';
import AddTask from '../components/AddTask';

export default function Project() {
	const [selectedProject, setSelectedProject] = useState({ name: '' });
	const { projectId } = useParams();
	const { filterTasksByProjectId } = useFilterTasks();
	const { projects, findSelectedProject } = useProjects();

	useEffect(() => {
		setSelectedProject(findSelectedProject(projects, projectId));
	}, [projectId, projects]);

	return (
		<div className="content">
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{filterTasksByProjectId(projectId).map((task) => (
				<Task key={task.id} task={task} />
			))}
			<AddTask selectedProjectId={selectedProject ? selectedProject.id : ''} />
		</div>
	);
}
