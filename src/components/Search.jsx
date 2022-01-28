import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import useCrudTasks from '../hooks/useCrudTasks';
import useTaskModal from '../hooks/useTaskModal';

function Search() {
  const { tasks } = useCrudTasks();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { handleTaskModalOpen } = useTaskModal();

  const isSearchResultsOpen = searchResults.length > 0;

  const handleTaskSearch = (e, tasks) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchTerm === '' ? setSearchResults([]) : setSearchResults(filteredTasks);
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  const handleSearchResultOpen = (task) => {
    handleTaskModalOpen(task);
    clearSearch();
  };

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search'
        value={searchInput}
        className='search__bar'
        onChange={(e) => handleTaskSearch(e, tasks)}
      />
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
