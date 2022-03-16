import useTaskModal from '../../hooks/useTaskModal';
import { EMPTY_TASK } from '../../constants/empty-task';

const ContentPlaceholder = ({ page, dueDate }) => {
  const { handleTaskModalOpen } = useTaskModal();
  const placeholderImgSrc = process.env.PUBLIC_URL + `/assets/${page}-new.png`;

  return (
    <div className='content__placeholder'>
      <img
        className='content__placeholderImg'
        src={placeholderImgSrc}
        alt='Empty Inbox Image'
      />
      <p className='content_pMedium'>
        {page === 'today' ? 'Get a clear view of the day ahead.' : 'All clear'}
      </p>
      <p className='content_pSmall'>
        {page === 'today'
          ? 'All your tasks that are due today will show up here.'
          : 'Looks like everything is organized in the right place.'}
      </p>
      <button
        onClick={() => handleTaskModalOpen(EMPTY_TASK, dueDate)}
        className='button button__primary'
        data-cy='addTaskButton'>
        Add a task
      </button>
    </div>
  );
};

export default ContentPlaceholder;
