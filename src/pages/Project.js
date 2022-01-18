import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import { TasksContext } from '../contexts/TasksContext';
import { ProjectsContext } from '../contexts/ProjectsContext';

export default function Project() {
	const { tasks } = useContext(TasksContext);
	const { projects } = useContext(ProjectsContext);
	const [selectedProject, setSelectedProject] = useState({ name: '' });
	const { projectId } = useParams();
	const { getSelectedProject } = useProjects();

	useEffect(() => {
		const project = getSelectedProject(projects, projectId);
		project.then((project) => setSelectedProject(project));
	}, [projectId, projects]);

	return (
		<div className="content">
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{tasks
				.filter((task) => task.projectId === projectId)
				.map((task) => (
					<Task key={task.id} task={task} />
				))}
			<AddTask selectedProjectId={selectedProject ? selectedProject.id : ''} />
		</div>
	);
}
