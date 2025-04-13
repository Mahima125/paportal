import React from 'react';
import NavItem from './NavItem';
import { 
  FiHome, 
  FiMessageCircle, 
  FiBookmark, 
  FiUser, 
  FiCalendar 
} from "react-icons/fi";

const Navigation = ({ isProfilePanelOpen, isMobile, showChatOnMobile, setShowChatOnMobile }) => {
  return (
    <div className={`flex flex-col ${isMobile ? 'w-12 py-4' : 'w-16 lg:w-64 py-4'} bg-white ${
      isProfilePanelOpen ? 'text-white' : 'text-gray-800'
    } transition-colors duration-300`}>
      <NavItem
        to="/dashboard"
        icon={<FiHome size={22} className={isProfilePanelOpen ? "text-white" : ""} />}
        label="Home"
        isProfilePanelOpen={isProfilePanelOpen}
      />
      
      {isMobile ? (
        <div
          className="flex items-center justify-center w-full p-3 cursor-pointer"
          onClick={() => setShowChatOnMobile(false)}
        >
          <FiMessageCircle size={22} className={showChatOnMobile ? "text-[#3A3285]" : ""} />
        </div>
      ) : (
        <NavItem
          to="/messages"
          icon={<FiMessageCircle size={22} className={isProfilePanelOpen ? "text-white" : ""} />}
          label="Message"
          isProfilePanelOpen={isProfilePanelOpen}
        />
      )}
      
      <NavItem
        to="/saved-items"
        icon={<FiBookmark size={22} className={isProfilePanelOpen ? "text-white" : ""} />}
        label="Saved Items"
        isProfilePanelOpen={isProfilePanelOpen}
      />
      <NavItem
        to="/profile"
        icon={<FiUser size={22} className={isProfilePanelOpen ? "text-white" : ""} />}
        label="Profile"
        isProfilePanelOpen={isProfilePanelOpen}
      />
      <NavItem
        to="/events"
        icon={<FiCalendar size={22} className={isProfilePanelOpen ? "text-white" : ""} />}
        label="Events"
        isProfilePanelOpen={isProfilePanelOpen}
      />
    </div>
  );
};

export default Navigation;