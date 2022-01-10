import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import useTasks from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

export default function Project(props) {
	const [tasks, setTasks] = React.useState([]);
	const [selectedProject, setSelectedProject] = React.useState({
		name: '',
	});
	const { projectId } = useParams();
	const { getTasks, deleteTask, toggleIsChecked } = useTasks();

	React.useEffect(() => getTasks(db, setTasks, projectId), [projectId]);
	React.useEffect(() => getSelectedProject(), [projectId]);

	const getSelectedProject = async () => {
		const thisProject = await props.projects.find(
			(project) => project.id === projectId
		);
		setSelectedProject(thisProject);
	};

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">
					{/* QUESTION: When I remove 'selectedProject &&' from below the program crashes on initial loading. 
          But I don't get why? Shouldn't the initial 'selectedProject' state of name='' lead to an 
          always valid object of 'selectedProject'? 
          
          In addition: even when leaving 'selectedProject &&' on first load of a project url, the h1 is missing
          and only appears when you select another project in the navbar.*/}
					{selectedProject && selectedProject.name}
				</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => (
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
