import React from 'react';
import NoProfile from "../../../assets/images/message/groupiconwhite.png";

const ContactItem = ({ chat, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer rounded-md ${
        isSelected ? "bg-gray-100" : ""
      }`}
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src={NoProfile} className="w-10 h-10 rounded-lg" alt="Profile" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{chat.name}</h3>
        </div>
        <div className="text-sm text-gray-500">
          <span 
            className={`inline-block rounded-full w-2 h-2 mr-1 ${
              chat.Designation === 'Student' ? 'bg-green-400' :
              chat.Designation === 'Alumni' ? 'bg-purple-400' : 'bg-yellow-400'
            }`}
          ></span>
          {chat.Designation}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;