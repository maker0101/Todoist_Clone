import { IoSearchOutline } from 'react-icons/io5';
import useCrudTasks from '../hooks/useCrudTasks';
import useSearch from '../hooks/useSearch';

function Search() {
  const { tasks } = useCrudTasks();
  const {
    searchInput,
    searchResults,
    handleTaskSearch,
    handleSearchResultOpen,
  } = useSearch();

  const isSearchResultsOpen = searchResults.length > 0;

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search'
        value={searchInput}
        className='search__bar'
        onChange={(e) => handleTaskSearch(e, tasks)}
      />
      <IoSearchOutline className='search__icon' />
      {isSearchResultsOpen && (
        <div className='search__results'>
          {searchResults.map((task) => (
            <div
              key={task.id}
              className='search__result'
              onClick={() => handleSearchResultOpen(task)}>
              {task.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
