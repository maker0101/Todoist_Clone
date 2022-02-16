import Page from '../components/Page';
import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import useTasks from '../hooks/useTasks';
import { INBOX_PROJECT_ID } from '../constants/inbox-project-id';

const Inbox = () => {
  const { getTasks } = useTasks();
  const inboxTasks = getTasks({ projectId: INBOX_PROJECT_ID });

  return (
    <Page>
      <div className='content'>
        <h1 className='content__title' data-cy='content__title'>
          Inbox
        </h1>
        {inboxTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <TaskAdd />
      </div>
    </Page>
  );
};

export default Inbox;
