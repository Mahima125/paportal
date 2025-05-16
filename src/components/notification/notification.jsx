import { useState } from "react";
import DashBoardNavBar from "../helper/DashBoardNavBar";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../helper/footer';

const Notification = () => {
  const [isToggled, setIsToggled] = useState(false);
  const userProfile = "Images/profile.jpg";

  const notificationData = [
    {
      id: 1,
      type: "request",
      title: "New requests for AlumUnity Account",
      user: "Neha(student)",
      time: "(3 min)",
      actions: ["View", "Deny", "Approve"],
      image: userProfile
    },
    {
      id: 2,
      type: "pending",
      title: "Pending requests",
      details: "(20+) requests",
      time: "(1 hr 5min)",
      actions: ["View"],
      image: userProfile
    },
    {
      id: 3,
      type: "like",
      title: "Likes ❤️",
      details: "sanjeev ram and 44 others liked the post",
      time: "(2 day)",
      actions: ["View"],
      image: "Images/group-profile.jpg"
    },
    {
      id: 4,
      type: "pending",
      title: "Pending requests",
      user: "Jack(student)",
      time: "(1 month)",
      status: "Approved",
      actions: ["View"],
      image: userProfile
    },
    {
      id: 5,
      type: "login",
      title: "New Login",
      details: "Samsung s21 Ultra",
      time: "(1 month)",
      actions: ["Change Password"],
      image: "Images/alert-icon.png"
    },
    {
      id: 6,
      type: "event",
      title: "Event Request",
      details: "From Eten Hunt for Holi celebration",
      time: "(2 months)",
      actions: ["View"],
      image: userProfile
    },
    {
      id: 7,
      type: "request",
      title: "New requests",
      user: "Nancy(Alumni)",
      time: "(3 months)",
      actions: ["View", "Deny", "Approve"],
      image: userProfile
    },
    {
      id: 8,
      type: "pending",
      title: "Pending requests",
      details: "(10+) requests",
      time: "(3 months)",
      actions: ["View"],
      image: userProfile
    },
    {
      id: 9,
      type: "like",
      title: "Likes ❤️",
      details: "Eten Hunt and 44 others liked the post",
      time: "(4 months)",
      actions: ["View"],
      image: "Images/group-profile.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F2EE] flex flex-col">
      <DashBoardNavBar />

      {/* Main container with proper padding and layout */}
      <div className="container mx-8 px-4 py-6 mt-16 flex">
        {/* Left Sidebar - Profile Section - Fixed on left */}
        <div className="w-64 mr-4 sticky top-20 h-fit">
          <div className="w-full relative pt-20 rounded-md bg-[#204C89] text-white flex flex-col items-center shadow-md">
            <div className="absolute -top-14 z-10">
              <img
                src={userProfile}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
            <div className="text-center">
              <h2 className="font-medium text-xl leading-tight">xyz anaas</h2>
              <p className="font-light text-lg leading-tight">AlumUnity</p>
            </div>

            {/* Navigation Menu */}
            <div className="mt-4 w-full">
              <ul className="text-white w-full">
                <hr className="border-white opacity-50" />
                <li>
                  <Link to="/messages" className="flex justify-between items-center w-full py-2 text-white hover:bg-blue-800 hover:text-white  px-4">
                    <div className="text-base font-light">Messages</div>
                    <TiMessages className="text-xl" />
                  </Link>
                </li>
                <hr className="border-white opacity-50" />
                <li>
                  <Link to="/notification" className="flex justify-between items-center w-full py-2 bg-blue-800 text-white px-4">
                    <div className="text-base font-light">Notifications</div>
                    <IoIosNotificationsOutline className="text-xl" />
                  </Link>
                </li>
                <hr className="border-white opacity-50" />
                <li>
                  <Link to="/events" className="flex justify-between items-center w-full py-2 text-white hover:bg-blue-800 px-4">
                    <div className="text-base font-light">Events</div>
                    <AiOutlinePlus className="text-xl" />
                  </Link>
                </li>
                <hr className="border-white opacity-50" />
                <li>
                  <Link to="/saved-items" className="flex justify-between items-center w-full py-2 text-white hover:bg-blue-800 px-4">
                    <div className="text-base font-light">Saved Items</div>
                    <MdOutlineBookmarkBorder className="text-xl" />
                  </Link>
                </li>
                <hr className="border-white opacity-50" />
                <li>
                  <Link to="/discover" className="flex justify-between items-center w-full py-2 text-white hover:bg-blue-800 px-4">
                    <div className="text-base font-light">Discover More</div>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </li>
                <hr className="border-white opacity-50" />
              </ul>
            </div>
          </div>
        </div>

        {/* Main content - Centered with max width */}
        <div className="flex-1 flex flex-col items-start -ml-32">
          <div className="w-full max-w-[650px] mx-auto">
            {/* Header */}
            <div className="text-3xl font-normal p-4 w-full bg-black text-white rounded-lg text-start mb-4 shadow-sm">
              Notifications
            </div>

            {/* Notification List */}
            <div className="w-full rounded-lg overflow-hidden shadow-sm">
              {notificationData.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`flex items-start p-3 w-full ${notification.type === 'like'
                      ? 'bg-[#D9E8FB]'
                      : notification.id % 2 === 0
                        ? 'bg-[#C5DEF9]'
                        : 'bg-[#D9E8FB]'
                    } ${index !== notificationData.length - 1 ? 'border-b border-white' : ''} relative`}
                >
                  {/* Three dots menu */}
                  <div className="absolute top-3 right-3 flex gap-0.5">
                    <div className="w-1 h-1 bg-[#363A40] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#363A40] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#363A40] rounded-full"></div>
                  </div>

                  <div className="flex items-start gap-3 w-full pr-6">
                    {/* Profile image */}
                    <div className="mt-1 flex-shrink-0">
                      <img
                        src={notification.image}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>

                    {/* Content section */}
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between w-full">
                        <p className="font-medium text-lg leading-tight text-black">
                          {notification.title}
                        </p>
                        <span className="text-xs font-medium text-black ml-2">
                          {notification.time}
                        </span>
                      </div>

                      <p className="font-medium text-sm leading-tight text-[#4D5053] my-1">
                        {notification.details || notification.user}
                      </p>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        {notification.actions.map((action, index) => (
                          <button
                            key={index}
                            className={`px-3 py-0.5 rounded-full text-xs font-medium border ${action === "Deny"
                                ? "border-[#C03535] text-[#C03535]"
                                : action === "Approve" || action === "Approved"
                                  ? "border-[#86C035] text-[#86C035]"
                                  : action === "Change Password"
                                    ? "border-[#C20C0C] text-[#C20C0C]"
                                    : "border-[#0C67C2] text-[#0C67C2]"
                              } bg-white`}
                          >
                            {action}
                          </button>
                        ))}
                        {notification.status && (
                          <span className="text-xs font-medium text-[#86C035] px-3 py-0.5 border border-[#86C035] rounded-full bg-white">
                            {notification.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;