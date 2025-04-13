
import React from 'react';
import { FiInfo } from "react-icons/fi";
import ProfileInfo from './ProfileInfo';

const ProfilePanel = ({ contactName, profilePanelRef }) => {
  return (
    <div
      ref={profilePanelRef}
      className="fixed top-0 right-0 h-screen w-3/4 md:w-1/4 bg-[#204C89] text-white shadow-lg transform transition-transform duration-300 z-50"
      style={{ boxShadow: '0 -2px 10px rgba(255, 255, 255, 0.4)' }}
    >
      <div className="flex justify-end items-end p-4">
        <button className="bg-[#204C89]">
          <FiInfo size={24} className="text-white" />
        </button>
      </div>
      
      <ProfileInfo contactName={contactName} />
    </div>
  );
};

export default ProfilePanel;