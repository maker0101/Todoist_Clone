import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { SelectedProjectContext } from './contexts/SelectedProjectContext';
import { ProjectModalContext } from './contexts/ProjectModalContext';
import { TaskModalContext } from './contexts/TaskModalContext';
import { ProjectFormContext } from './contexts/ProjectFormContext';
import { TaskFormContext } from './contexts/TaskFormContext';
import { SidebarContext } from './contexts/SidebarContext';
import useMediaQuery from './hooks/useMediaQuery';
import { defaultProject } from './utilities/default-project';

const App = () => {
  const { isWidthLarger720 } = useMediaQuery();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isWidthLarger720);
  const [selectedProject, setSelectedProject] = useState('');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [projectForm, setProjectForm] = useState({});
  const [taskForm, setTaskForm] = useState({});

  const clearProjectForm = () => setProjectForm(defaultProject);

  return (
    <div className='App'>
      <SelectedProjectContext.Provider
        value={{ selectedProject, setSelectedProject }}>
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
          <ProjectModalContext.Provider
            value={{ isProjectModalOpen, setIsProjectModalOpen }}>
            <TaskModalContext.Provider
              value={{ isTaskModalOpen, setIsTaskModalOpen }}>
              <ProjectFormContext.Provider
                value={{ projectForm, setProjectForm, clearProjectForm }}>
                <TaskFormContext.Provider value={{ taskForm, setTaskForm }}>
                  <Header />
                  <Main />
                </TaskFormContext.Provider>
              </ProjectFormContext.Provider>
            </TaskModalContext.Provider>
          </ProjectModalContext.Provider>
        </SidebarContext.Provider>
      </SelectedProjectContext.Provider>
    </div>
  );
};

export default App;
