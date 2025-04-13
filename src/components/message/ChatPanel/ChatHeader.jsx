import React from 'react';
import { FiInfo, FiArrowLeft } from "react-icons/fi";
import NoProfile from "../../../assets/images/message/groupiconwhite.png";

const ChatHeader = ({ contactName, toggleProfilePanel, isMobile, handleBackToContacts }) => {
  return (
    <div
      style={{ backgroundColor: "#204C89" }}
      className="h-16 p-3 flex items-center justify-between shadow-md"
    >
      <div className="flex items-center">
        <div className="mr-3">
          <img src={NoProfile} className="w-10 h-10 rounded-lg" alt="Profile" />
        </div>
        <h2 className="text-white font-medium">{contactName}</h2>
      </div>
      <div
        className="text-white cursor-pointer p-2 hover:rounded-lg"
        onClick={toggleProfilePanel}
      >
        <FiInfo size={24} />
      </div>
    </div>
  );
};

export default ChatHeader;