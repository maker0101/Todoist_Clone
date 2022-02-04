import { useContext } from 'react';
import useCrudTasks from './useCrudTasks';
import { TaskFormContext } from '../contexts/TaskFormContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { dateToYearMonthDay } from '../utilities/transform-dates';
import { defaultTask } from '../utilities/default-task';

const useTaskForm = () => {
  const { setTaskForm } = useContext(TaskFormContext);
  const { selectedProject } = useContext(SelectedProjectContext);
  const { tasks, createTask, updateTask } = useCrudTasks();

  const clearTaskForm = (projectId) => {
    setTaskForm({
      ...defaultTask,
      projectId: projectId,
    });
  };

  const populateTaskForm = (task = '', dueDate) => {
    dueDate = dueDate ? dateToYearMonthDay(dueDate) : '';

    let populatedTaskForm;
    if (task) {
      populatedTaskForm = {
        id: task?.id || defaultTask.id,
        name: task?.name || defaultTask.name,
        description: task?.description || defaultTask.description,
        dueDate: task?.dueDate || dueDate || defaultTask.dueDate,
        projectId:
          task?.projectId || selectedProject?.id || defaultTask.projectId,
      };
    } else {
      populatedTaskForm = {
        ...defaultTask,
        projectId: selectedProject?.id || defaultTask.projectId,
      };
    }

    setTaskForm(populatedTaskForm);
  };

  const handleTaskFormOpen = (setIsTaskFormOpen, dueDate = '') => {
    const task = {};
    populateTaskForm(task, dueDate);
    setIsTaskFormOpen(true);
  };

  const handleTaskFormSubmit = (e, db, taskForm, userId, selectedProjectId) => {
    e.preventDefault();
    const taskExists =
      tasks.filter((task) => task.id === taskForm.id).length > 0;

    taskExists
      ? updateTask(db, taskForm, userId)
      : createTask(db, taskForm, userId);

    clearTaskForm(selectedProjectId);
  };

  const handleTaskFormCancel = (
    isTaskModalOpen,
    setIsTaskModalOpen,
    setIsTaskFormOpen,
    selectedProjectId
  ) => {
    isTaskModalOpen ? setIsTaskModalOpen(false) : setIsTaskFormOpen(false);
    clearTaskForm(selectedProjectId);
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
