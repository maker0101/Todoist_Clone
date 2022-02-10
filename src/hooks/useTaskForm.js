import { useContext } from 'react';
import useTasks from './useTasks';
import { TaskFormContext } from '../contexts/TaskFormContext';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { dateToYearMonthDay } from '../utilities/transform-dates';
import { defaultTask } from '../utilities/default-task';

const useTaskForm = () => {
  const { isTaskModalOpen, setIsTaskModalOpen } = useContext(TaskModalContext);
  const { setTaskForm } = useContext(TaskFormContext);
  const { selectedProject } = useContext(SelectedProjectContext);
  const { tasks, addTask, updateTask } = useTasks();

  const clearTaskForm = (projectId) => {
    setTaskForm({
      ...defaultTask,
      projectId: projectId,
    });
  };

  const populateTaskForm = (task = {}, dueDate = '') => {
    dueDate = dueDate && dateToYearMonthDay(dueDate);
    let taskFormData;

    if (task) {
      taskFormData = {
        id: task?.id || defaultTask.id,
        name: task?.name || defaultTask.name,
        description: task?.description || defaultTask.description,
        dueDate: task?.dueDate || dueDate || defaultTask.dueDate,
        projectId:
          task?.projectId || selectedProject?.id || defaultTask.projectId,
      };
    } else {
      taskFormData = {
        ...defaultTask,
        projectId: selectedProject?.id || defaultTask.projectId,
      };
    }

    setTaskForm(taskFormData);
  };

  const handleTaskFormOpen = (setIsTaskFormOpen, dueDate) => {
    populateTaskForm(null, dueDate);
    setIsTaskFormOpen(true);
  };

  const handleTaskFormSubmit = (e, taskForm) => {
    e.preventDefault();
    const taskExists = tasks.some((task) => task.id === taskForm.id);

    taskExists ? updateTask(taskForm) : addTask(taskForm);
    clearTaskForm(selectedProject.id);
  };

  const handleTaskFormCancel = (setIsTaskFormOpen) => {
    isTaskModalOpen ? setIsTaskModalOpen(false) : setIsTaskFormOpen(false);
    clearTaskForm(selectedProject.id);
  };

  return {
    clearTaskForm,
    populateTaskForm,
    handleTaskFormOpen,
    handleTaskFormSubmit,
    handleTaskFormCancel,
  };
};

export default useTaskForm;
