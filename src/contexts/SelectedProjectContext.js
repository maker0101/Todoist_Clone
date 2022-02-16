import { useState, createContext } from 'react';

const SelectedProjectContext = createContext();

const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('');

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export {SelectedProjectProvider, SelectedProjectContext}
