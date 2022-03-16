import Page from '../components/Page';
import TasksList from '../components/Task/TasksList';
import TaskAdd from '../components/Task/TaskAdd';
import ContentTitle from '../components/Content/ContentTitle';
import ContentPlaceholder from '../components/Content/ContentPlaceholder';
import useTasks from '../hooks/useTasks';
import { INBOX_PROJECT_ID } from '../constants/inbox-project-id';

const Inbox = () => {
  const { getTasks } = useTasks();
  const inboxTasks = getTasks({ projectId: INBOX_PROJECT_ID });
  const hasTasks = inboxTasks.length > 0;

  return (
    <Page>
      <>
        <ContentTitle title={'Inbox'} />
        {hasTasks ? (
          <>
            <TasksList tasks={inboxTasks} />
            <TaskAdd />
          </>
        ) : (
          <>
            <TaskAdd />
            <ContentPlaceholder page='inbox' />
          </>
        )}
      </>
    </Page>
  );
};

export default Inbox;
