import React, { useState } from 'react';

const TransactionFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilterChange(term);
  };

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type to filter transactions"
      />
    </div>
  );
};

export default TransactionFilter;
