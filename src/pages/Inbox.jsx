import Task from '../components/Task';
import TaskAdd from '../components/TaskAdd';
import useCrudTasks from '../hooks/useCrudTasks';
import { filterTasksByProjectId } from '../utilities/filter-tasks';

const Inbox = () => {
  const { tasks } = useCrudTasks();
  const inboxTasks = filterTasksByProjectId(tasks, 'GtbY3fGVBVrTJmJH4IGd');

  return (
    <div className='content'>
      <h1 className='content__title'>Inbox</h1>
      {inboxTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <TaskAdd />
    </div>
  );
};

export default Inbox;
