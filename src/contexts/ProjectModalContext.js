import { useState, createContext } from 'react';

const ProjectModalContext = createContext();

const ProjectModalProvider = ({ children }) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <ProjectModalContext.Provider
      value={{ isProjectModalOpen, setIsProjectModalOpen }}>
      {children}
    </ProjectModalContext.Provider>
  );
};

export { ProjectModalProvider, ProjectModalContext };
