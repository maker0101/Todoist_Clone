import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { TaskFormContext } from '../contexts/TaskFormContext';
import { SidebarContext } from '../contexts/SidebarContext';
import useMediaQuery from '../hooks/useMediaQuery';
import { defaultProject } from '../utilities/default-project';

const Contexts = ({ children }) => {
  const { isWidthLarger720 } = useMediaQuery();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isWidthLarger720);
  const [selectedProject, setSelectedProject] = useState('');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [projectForm, setProjectForm] = useState({});
  const [taskForm, setTaskForm] = useState({});

  const clearProjectForm = () => setProjectForm(defaultProject);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
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
                    {children}
                  </TaskFormContext.Provider>
                </ProjectFormContext.Provider>
              </TaskModalContext.Provider>
            </ProjectModalContext.Provider>
          </SidebarContext.Provider>
        </SelectedProjectContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default Contexts;
