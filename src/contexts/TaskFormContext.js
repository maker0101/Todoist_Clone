import { useState, createContext } from 'react';

const TaskFormContext = createContext();

const TaskFormProvider = ({ children }) => {
  const [taskForm, setTaskForm] = useState({});

  return (
    <TaskFormContext.Provider value={{ taskForm, setTaskForm }}>
      {children}
    </TaskFormContext.Provider>
  );
};

export { TaskFormProvider, TaskFormContext };
