import { useState, createContext, useContext } from 'react';
import { UserContext } from './UserContext';
import { defaultProject } from '../utilities/default-project';

const ProjectFormContext = createContext();

const ProjectFormProvider = ({ children }) => {
  const [projectForm, setProjectForm] = useState({});
  const { user } = useContext(UserContext);

  const clearProjectForm = () =>
    setProjectForm({
      ...defaultProject,
      userId: user.uid,
    });

  return (
    <ProjectFormContext.Provider
      value={{ projectForm, setProjectForm, clearProjectForm }}>
      {children}
    </ProjectFormContext.Provider>
  );
};

export { ProjectFormProvider, ProjectFormContext };
