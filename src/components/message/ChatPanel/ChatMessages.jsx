import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div
      id="chat-messages"
      className="flex-1 overflow-y-auto p-4"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg)",
      }}
    >
      {messages.map((message, index) => {
        if (message.type === "text") {
          return (
            <div
              key={index}
              className={`mb-4 ${message.sender === "me" ? "text-right" : "text-left"}`}
            >
              <span
                style={{ backgroundColor: "rgb(22, 53, 96)" }}
                className="inline-block p-2 rounded-lg text-white max-w-xs"
              >
                {message.text}
              </span>
            </div>
          );
        } else if (message.type === "audio") {
          return (
            <div
              key={index}
              className={`flex w-full ${message.sender === "me" ? "justify-end" : "justify-start"} items-center`}
            >
              <audio controls className="mb-4 m-2">
                <source src={message.url} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={`flex w-full ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <img
                className="mb-4 m-2 border-2 border-black rounded-lg"
                width="200px"
                src={message.url}
                alt="Uploaded content"
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ChatMessages;