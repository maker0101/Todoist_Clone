import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { SelectedProjectContext } from './contexts/SelectedProjectContext';
import { ProjectModalContext } from './contexts/ProjectModalContext';
import { TaskModalContext } from './contexts/TaskModalContext';
import { ProjectFormContext } from './contexts/ProjectFormContext';
import { TaskFormContext } from './contexts/TaskFormContext';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState('');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [projectForm, setProjectForm] = useState({});
  const [taskForm, setTaskForm] = useState({});

  return (
    <div className='App'>
      <SelectedProjectContext.Provider
        value={{ selectedProject, setSelectedProject }}>
        <ProjectModalContext.Provider
          value={{ isProjectModalOpen, setIsProjectModalOpen }}>
          <TaskModalContext.Provider
            value={{ isTaskModalOpen, setIsTaskModalOpen }}>
            <ProjectFormContext.Provider
              value={{ projectForm, setProjectForm }}>
              <TaskFormContext.Provider value={{ taskForm, setTaskForm }}>
                <Header
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
                <Main isSidebarOpen={isSidebarOpen} />
              </TaskFormContext.Provider>
            </ProjectFormContext.Provider>
          </TaskModalContext.Provider>
        </ProjectModalContext.Provider>
      </SelectedProjectContext.Provider>
    </div>
  );
};

export default App;
