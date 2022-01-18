import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import useProjects from '../hooks/useProjects';
import Task from '../components/Task';
import AddTask from '../components/AddTask';

export default function Project(props) {
	const [selectedProject, setSelectedProject] = useState({ name: '' });
	const { projectId } = useParams();
	const { getSelectedProject } = useProjects();

	useEffect(() => {
		const project = getSelectedProject(props.projects, projectId);
		project.then((project) => setSelectedProject(project));
	}, [projectId, props.projects]);

	return (
		<div className="content">
			<h1 className="content__title">
				{selectedProject && selectedProject.name}
			</h1>
			{props.tasks
				.filter((task) => task.projectId === projectId)
				.map((task) => (
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
