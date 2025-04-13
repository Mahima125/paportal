import React from 'react';
import { FiPhone, FiMail, FiInfo } from "react-icons/fi";
import NoProfile from "../../../assets/images/message/groupiconwhite.png";

const ProfileInfo = ({ contactName }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 mb-9">
        <div className="w-24 h-24 rounded-lg flex items-center justify-center mb-4">
          <img src={NoProfile} className="w-24 h-24 rounded-lg" alt="Profile" />
        </div>
        <h2 className="text-xl font-bold">{contactName}</h2>
      </div>

      <div className="flex flex-col items-center mb-6 px-4">
        <div className="flex items-center p-2 rounded-lg">
          <FiPhone className="mr-3" />
          <p>98392 92028</p>
        </div>
        <div className="flex items-center p-2 rounded-lg">
          <FiMail className="mr-3" />
          <p>arun@gmail.com</p>
        </div>
      </div>

      <div className="">
        <div className="flex items-center p-2">
          <FiInfo size={22} className="text-white" />
          <h3 className="text-lg font-extrabold mb-2 p-2">About</h3>
        </div>
        <div
          className="bg-[#204C89] rounded-lg p-3"
          style={{ boxShadow: '0 -4px 10px rgba(255, 255, 255, 0.4)' }}
        >
          <p className="text-sm">
            We are proud to shine the spotlight on one of Pragyan School's distinguished alumni, Arun. His journey from the hallowed halls of Pragyan to his broader world has been nothing short of amazing! Arun, a graduate of the Class of 2015, has found his calling in the rapidly evolving field of artificial intelligence.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;