import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Auth from '../pages/Auth';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Project from '../pages/Project';
import ProjectModal from './Modals/ProjectModal';
import TaskModal from './Modals/TaskModal';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { SidebarContext } from '../contexts/SidebarContext';

const Main = () => {
  const { isProjectModalOpen } = useContext(ProjectModalContext);
  const { isTaskModalOpen } = useContext(TaskModalContext);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div className='main' data-cy='main'>
      {isSidebarOpen && (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div
            className='sidebar__bgOverlay'
            onClick={() => setIsSidebarOpen(false)}></div>
        </>
      )}
      <Routes>
        <Route path='/' element={<Navigate to='/today' />} />
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/inbox' element={<Inbox />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
        <Route path='/project/:projectId' element={<Project />}></Route>
        {/*<Route path='*' element={<Navigate to='/' />} />*/}
      </Routes>
      {isTaskModalOpen && <TaskModal />}
      {isProjectModalOpen && <ProjectModal />}
    </div>
  );
};

export default Main;
