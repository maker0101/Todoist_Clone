import { Routes, Route, Navigate } from 'react-router-dom';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Project from '../pages/Project';

export default function Content(props) {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/today" />} />
			<Route
				path="/inbox"
				element={
					<Inbox
						tasks={props.tasks}
						setTasks={props.setTasks}
						projects={props.projects}
						setProjects={props.setProjects}
					/>
				}
			></Route>
			<Route
				path="/today"
				element={
					<Today
						tasks={props.tasks}
						setTasks={props.setTasks}
						projects={props.projects}
						setProjects={props.setProjects}
					/>
				}
			></Route>
			<Route
				path="/upcoming"
				element={
					<Upcoming
						tasks={props.tasks}
						setTasks={props.setTasks}
						projects={props.projects}
						setProjects={props.setProjects}
					/>
				}
			></Route>
			<Route
				path="/project/:projectId"
				element={
					<Project
						tasks={props.tasks}
						setTasks={props.setTasks}
						projects={props.projects}
						setProjects={props.setProjects}
					/>
				}
			></Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}
