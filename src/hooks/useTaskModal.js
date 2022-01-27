import { useContext } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import useTaskForm from './useTaskForm';

const useTaskModal = () => {
  const { setIsTaskModalOpen } = useContext(TaskModalContext);
  const { populateTaskForm } = useTaskForm();

  const handleTaskModalOpen = (task) => {
    populateTaskForm(task);
    setIsTaskModalOpen(true);
  };

  return {
    handleTaskModalOpen,
  };
};

export default useTaskModal;
