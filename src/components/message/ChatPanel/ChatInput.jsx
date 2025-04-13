import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const ChatInput = ({ newMessage, setNewMessage, handleSendMessage, handleFileUploadClick, isMobile }) => {
  const fileInputId = isMobile ? "fileInput" : "fileInputDesktop";
  
  return (
    <div className="bg-white p-3 border-t">
      <div className="flex items-center">
        <div className="flex flex-1 items-center border rounded-xl p-2 bg-[#D9D9D9]">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 focus:outline-none bg-transparent"
          />
          <div className="flex items-center">
            <label htmlFor={fileInputId} className="p-1 mx-1 cursor-pointer text-gray-500 hover:text-blue-500">
              <AiOutlinePlus size={24} className="text-[#2C365A]" />
              <input
                id={fileInputId}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUploadClick(e)}
                style={{ display: "none" }}
              />
            </label>
            <button className="p-1 bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:none">
              <BsEmojiSmile size={22} className="text-[#2E3B5B]" />
            </button>
          </div>
        </div>
        <button
          onClick={handleSendMessage}
          className="bg-[#2E3B5B] p-2 ml-2 text-white rounded-lg transition"
        >
          <IoIosSend size={22} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;