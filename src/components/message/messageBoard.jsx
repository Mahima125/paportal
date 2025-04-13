import React, { useEffect, useRef, useState } from "react";
import { FiBell } from "react-icons/fi";
import SchoolLogo from "../../assets/images/message/Schoollogo.png";
import ProfilePicture from "../../assets/images/message/profile.png";
import { chatList, initialMessages } from './utils/constants';
import Navigation from './Navigation';
import ContactList from './ContactList';
import ChatPanel from './ChatPanel';
import ProfilePanel from './ProfilePanel';

const MessageBoard = () => {
  
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [clickMessage, setClickMessage] = useState("Elen Hunt");
  const [chatOpened, setChatOpened] = useState(chatList[0]);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [filteredChatList, setFilteredChatList] = useState(chatList);
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);
  const profilePanelRef = useRef(null);


  useEffect(() => {
    function scrollDown() {
      const chatContainer = document.getElementById("chat-messages");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
    scrollDown();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profilePanelRef.current &&
        !profilePanelRef.current.contains(event.target)
      ) {
        setShowProfilePanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const obj = {
        status: "messageSend",
        message: newMessage,
        chatOpened,
      };
      console.log(obj);
      setMessages([
        ...messages,
        { type: "text", text: newMessage, sender: "me" },
      ]);
      setNewMessage("");
    }
  };

  const handleSearch = () => {
    const filteredChats = chatList.filter((chat) =>
      chat.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredChatList(filteredChats);
  };

  const toggleProfilePanel = () => {
    setShowProfilePanel(!showProfilePanel);
  };

  const handleChatClick = (e, chat) => {
    setChatOpened(chat);
    setClickMessage(chat.name);
    setShowChatOnMobile(true); 
    console.log({
      status: "chatOpened",
      chat,
    });
  };

  const handleFileUploadClick = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setMessages([
      ...messages,
      {
        type: "image",
        url: URL.createObjectURL(file),
        sender: "me",
      },
    ]);
  };

  const handleBackToContacts = () => {
    setShowChatOnMobile(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div
        style={{
          backgroundColor: showProfilePanel ? "white" : "rgb(22, 53, 96)",
          position: "relative",
          zIndex: 10,
        }}
        className="flex items-center justify-between shadow-md h-16 fixed"
      >
        <div className="flex items-center">
          {!showProfilePanel && (
            <div className="flex items-center bg-white p-2">
              <img
                src={SchoolLogo}
                alt="School Logo"
                className="h-12 object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiBell className={`${showProfilePanel ? "text-black" : "text-white"} text-xl`} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>

          <div className="flex items-center">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="h-10 w-24 md:w-32 pr-4 flex-shrink-0 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        <div className="flex flex-col md:hidden w-full h-full">
          <div className="flex flex-row flex-grow h-full">
            <Navigation 
              isProfilePanelOpen={showProfilePanel}
              isMobile={true}
              showChatOnMobile={showChatOnMobile}
              setShowChatOnMobile={setShowChatOnMobile}
            />

            <div className="flex-1 flex flex-col h-full">
              {!showChatOnMobile && (
                <div className="flex-1 overflow-y-auto bg-white w-full">
                  <ContactList 
                    filteredChatList={filteredChatList}
                    selectedContactName={clickMessage}
                    onContactClick={handleChatClick}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                  />
                </div>
              )}

              {showChatOnMobile && (
                <ChatPanel
                  contactName={clickMessage}
                  messages={messages}
                  newMessage={newMessage}
                  setNewMessage={setNewMessage}
                  handleSendMessage={handleSendMessage}
                  handleFileUploadClick={handleFileUploadClick}
                  toggleProfilePanel={toggleProfilePanel}
                  isMobile={true}
                  handleBackToContacts={handleBackToContacts}
                />
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full justify-start">
          <Navigation 
            isProfilePanelOpen={showProfilePanel}
            isMobile={false}
          />

          <div className="flex flex-col w-1/4 overflow-y-auto border-r border-gray-200 bg-white">
            <ContactList 
              filteredChatList={filteredChatList}
              selectedContactName={clickMessage}
              onContactClick={handleChatClick}
              searchText={searchText}
              setSearchText={setSearchText}
              handleSearch={handleSearch}
            />
          </div>

          <div className="flex flex-col w-3/4 bg-white">
            <ChatPanel
              contactName={clickMessage}
              messages={messages}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              handleSendMessage={handleSendMessage}
              handleFileUploadClick={handleFileUploadClick}
              toggleProfilePanel={toggleProfilePanel}
              isMobile={false}
            />
          </div>
        </div>

        {showProfilePanel && (
          <ProfilePanel 
            contactName={clickMessage}
            profilePanelRef={profilePanelRef}
          />
        )}
      </div>
    </div>
  );
};

export default MessageBoard;