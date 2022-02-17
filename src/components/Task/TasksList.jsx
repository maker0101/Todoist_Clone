import Task from './Task';

const TasksList = ({ title, tasks }) => {
  return (
    <div className='content__section'>
      {title && (
        <>
          <h2 className='content__subTitle' data-cy='content__subtitle'>
            {title}
          </h2>
          <hr />
        </>
      )}
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TasksList;
