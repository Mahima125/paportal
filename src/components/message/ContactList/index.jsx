import React from 'react';
import ContactItem from './ContactItem';
import SearchBar from './SearchBar';

const ContactList = ({ 
  filteredChatList, 
  selectedContactName, 
  onContactClick, 
  searchText, 
  setSearchText, 
  handleSearch 
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#3A3285]">
          Message<span className="text-red-500">•</span>
        </h2>
      </div>

      <SearchBar 
        searchText={searchText} 
        setSearchText={setSearchText} 
        onSearch={handleSearch} 
      />

      <div className="space-y-1">
        {filteredChatList.map((chat, index) => (
          <ContactItem 
            key={index} 
            chat={chat} 
            isSelected={chat.name === selectedContactName}
            onClick={(e) => onContactClick(e, chat)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;