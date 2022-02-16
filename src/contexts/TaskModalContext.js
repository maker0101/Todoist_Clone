import { useState, createContext } from 'react';

const TaskModalContext = createContext({});

const TaskModalProvider = ({ children }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <TaskModalContext.Provider value={{ isTaskModalOpen, setIsTaskModalOpen }}>
      {children}
    </TaskModalContext.Provider>
  );
};

export { TaskModalProvider, TaskModalContext };

