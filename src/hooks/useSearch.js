import { useState } from 'react';
import useTaskModal from '../hooks/useTaskModal';

const useSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { handleTaskModalOpen } = useTaskModal();

  const clearSearch = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  const handleTaskModalOpenFromSearch = (task) => {
    handleTaskModalOpen(task);
    clearSearch();
  };

  const handleSearch = (e, tasks) => {
    const searchTerm = e.target.value;
    setSearchInput(e.target.value);

    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(searchTerm ? filteredTasks : []);
  };

  return {
    searchInput,
    searchResults,
    handleTaskModalOpenFromSearch,
    handleSearch,
  };
};

export default useSearch;
