import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatPanel = ({
  contactName,
  messages,
  newMessage,
  setNewMessage,
  handleSendMessage,
  handleFileUploadClick,
  toggleProfilePanel,
  isMobile,
  handleBackToContacts
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      <ChatHeader
        contactName={contactName}
        toggleProfilePanel={toggleProfilePanel}
        isMobile={isMobile}
        handleBackToContacts={handleBackToContacts}
      />
      
      <ChatMessages messages={messages} />
      
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        handleFileUploadClick={handleFileUploadClick}
        isMobile={isMobile}
      />
    </div>
  );
};

export default ChatPanel;