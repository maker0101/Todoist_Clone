import Task from '../components/Task';
import AddTask from '../components/AddTask';
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
      <AddTask />
    </div>
  );
};

export default Inbox;
