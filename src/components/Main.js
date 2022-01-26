import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Project from '../pages/Project';
import ProjectModal from './ProjectModal';
import TaskModal from './TaskModal';
import useTaskModal from '../hooks/useTaskModal';

export default function Main({ isSidebarHidden }) {
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	const { isTaskModalOpen } = useTaskModal();

	return (
		<div className="main">
			<Sidebar
				isSidebarHidden={isSidebarHidden}
				setIsProjectModalOpen={setIsProjectModalOpen}
			/>
			<Routes>
				<Route path="/" element={<Navigate to="/today" />} />
				<Route path="/inbox" element={<Inbox />}></Route>
				<Route path="/today" element={<Today />}></Route>
				<Route path="/upcoming" element={<Upcoming />}></Route>
				<Route path="/project/:projectId" element={<Project />}></Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			{isTaskModalOpen && <TaskModal />}
			{isProjectModalOpen && (
				<ProjectModal setIsProjectModalOpen={setIsProjectModalOpen} />
			)}
		</div>
	);
}
