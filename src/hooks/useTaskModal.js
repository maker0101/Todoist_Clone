import { useContext } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { TaskFormContext } from '../contexts/TaskFormContext';
import useTaskForm from './useTaskForm';

const useTaskModal = () => {
  const { setIsTaskModalOpen } = useContext(TaskModalContext);
  const { setTaskForm } = useContext(TaskFormContext);
  const { populateTaskForm } = useTaskForm();

  const handleTaskModalOpen = (task, dueDate = '') => {
    const taskFormData = populateTaskForm(task, dueDate);
    setTaskForm(taskFormData);
    setIsTaskModalOpen(true);
  };

  return {
    handleTaskModalOpen,
  };
};

export default useTaskModal;
