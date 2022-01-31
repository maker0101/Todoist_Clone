import { IoSearchOutline } from 'react-icons/io5';
import useCrudTasks from '../hooks/useCrudTasks';
import useSearch from '../hooks/useSearch';

function Search() {
  const { tasks } = useCrudTasks();
  const { searchInput, searchResults, handleSearch, handleTaskOpen } =
    useSearch();

  const areResultsOpen = searchResults.length > 0;

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search'
        value={searchInput}
        className='search__bar'
        onChange={(e) => handleSearch(e, tasks)}
      />
      <IoSearchOutline className='search__icon' />
      {areResultsOpen && (
        <div className='search__results'>
          {searchResults.map((task) => (
            <div
              key={task.id}
              className='search__result'
              onClick={() => handleTaskOpen(task)}>
              {task.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;