import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none bg-gray-100"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
      />
      <button
        style={{ color: "#778CAB" }}
        className="absolute right-4 top-1.5 p-2 bg-gray-100 hover:bg-gray-100 hover:none"
        onClick={onSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;