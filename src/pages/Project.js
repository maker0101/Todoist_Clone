import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import useTasks from '../hooks/useTasks';
import useProjects from '../hooks/useProjects';
import TaskForm from '../components/TaskForm';

export default function Project(props) {
	const [selectedProject, setSelectedProject] = React.useState({ name: '' });
	const [projectTasks, setProjectTasks] = React.useState(props.tasks);
	const { projectId } = useParams();
	const { deleteTask, toggleIsChecked, filterTasks } = useTasks();
	const { getSelectedProject } = useProjects();

	React.useEffect(
		() => getSelectedProject(props.projects, projectId, setSelectedProject),
		[projectId, props.projects]
	);
	React.useEffect(() => {
		setProjectTasks(filterTasks(props.tasks, projectId));
	}, [projectId, props.tasks]);

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">
					{selectedProject && selectedProject.name}
				</h1>
				<ul className="content__tasksList">
					{projectTasks.map((task) => (
						<div className="content__taskContainer" key={task.id}>
							<li className="content__task">
								<label className="checkbox__container">
									<input
										type="checkbox"
										checked={task.isChecked}
										onChange={() =>
											toggleIsChecked(db, task.id, task.isChecked)
										}
									></input>
									<span className="checkbox__checkmark"></span>
								</label>
								<span className="content__taskName">{task.name}</span>
								<span className="content__taskIcons">
									<VscTrash onClick={() => deleteTask(db, task.id)} />
									<VscEdit />
								</span>
								<span></span>
								<span
									className="content__taskDescription"
									style={{ display: task.description ? 'flex' : 'none' }}
								>
									{task.description}
								</span>
							</li>
							<hr />
						</div>
					))}
					<TaskForm />
				</ul>
			</div>
		</div>
	);
}
