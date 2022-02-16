import { useContext } from 'react';
import useTasks from '../hooks/useTasks';
import Page from '../components/Page';
import TasksList from '../components/Task/TasksList';
import TaskAdd from '../components/Task/TaskAdd';
import ContentTitle from '../components/Content/ContentTitle';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';

const Project = () => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const { getTasks } = useTasks();
  const projectTasks = getTasks({ projectId: selectedProject.id });

  return (
    <Page>
      <ContentTitle title={selectedProject?.name} />
      <TasksList tasks={projectTasks} />
      <TaskAdd selectedProjectId={selectedProject?.id} />
    </Page>
  );
};

export default Project;
