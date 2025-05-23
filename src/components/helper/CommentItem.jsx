import React from 'react';
import userProfile from "../../../public/Images/profile.jpg";

const CommentItem = ({ username, content, timestamp }) => {
  // Format the timestamp - handle both Date objects and strings
  let formattedTime;
  if (timestamp) {
    if (typeof timestamp === 'string') {
      formattedTime = new Date(timestamp).toLocaleString();
    } else if (timestamp instanceof Date) {
      formattedTime = timestamp.toLocaleString();
    } else if (timestamp.toDate && typeof timestamp.toDate === 'function') {
      // Handle Firestore Timestamp objects
      formattedTime = timestamp.toDate().toLocaleString();
    } else {
      formattedTime = "Just now";
    }
  } else {
    formattedTime = "Just now";
  }

  return (
    <div className="flex gap-2 mb-3 border-b pb-2">
      <img 
        src={userProfile} 
        alt={`${username}'s profile`} 
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs text-gray-500">{formattedTime}</p>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default CommentItem;