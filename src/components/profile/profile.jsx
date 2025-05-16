import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../helper/navbar";
import "./profile.css";
import RequestBox from "../helper/requestbox";
import { FaRegEdit } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidNavigation } from "react-icons/bi";
import ProfileSection from "./profileSection";
import ActivitiesSection from "./activitiesSection";
import ArticlesSection from "./articlesSection";
import { currentUser } from "./UserData";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../../assets/images/message/Schoollogo.png";
import { FiBell } from "react-icons/fi";
import ProfilePicture from "../../assets/images/message/profile.png";

const Profile = () => {
  const [data, setData] = useState(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const controlBtns = ["PROFILE", "ACTIVITY & INTERESTS", "ARTICLES (3)"];
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch("http://localhost:3000/api/getAllData/1");
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    }
    fetchDetails();
  }, []);

  const sections = [
    <ProfileSection userdata={data} />,
    <ActivitiesSection />,
    <ArticlesSection />,
  ];

  return (
    <>
      <section className="relative profile_page_container min-h-screen ">
        <div
                style={{
                  backgroundColor:  "rgb(22, 53, 96)",
                  position: "relative",
                  zIndex: 10,
                }}
                className="flex items-center justify-between shadow-md h-16 fixed"
              >
                <div className="flex items-center">
                  
                    <div className="flex items-center bg-white p-2">
                      <img
                        src={SchoolLogo}
                        alt="School Logo"
                        className="h-12 object-cover"
                      />
                    </div>
              
                </div>
        
                <div className="flex items-center text-white space-x-4">
                  <div className="relative">
                    <FiBell size={22} />
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

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <main className="my-4 min-h-[80vh] relative">
           
            <div className="page_components h-full flex flex-col lg:flex-row gap-6 mt-16">
              <section className="w-full lg:w-2/3 h-full rounded-xl bg-white ">
                <div className="relative p-4">
                  <div className="flex justify-end space-x-2 mb-4">
                    <button className="py-2 px-3 rounded-full flex items-center bg-white  ">
                      <FaRegEdit className="mr-1" />
                      <span
                        onClick={() =>
                          navigate(`/${data && data.basicInfo.userId}/editprofile`)
                        }
                      >
                        Edit Profile
                      </span>
                    </button>
                    <button className="py-2 px-3 rounded-full bg-white ">
                      <SlOptionsVertical />
                    </button>
                  </div>

                  <section className="user-profile-head flex flex-col sm:flex-row gap-4 items-center sm:items-start px-4 mb-6">
                    <div className="relative">
                      <img
                        src={currentUser.userImg}
                        alt={currentUser.userName}
                        width="130"
                        height="130"
                        className="rounded-full border-4  shadow-md"
                      />
                    </div>
                    <div className="user_head_desc flex-1 flex flex-col gap-2 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h1 className="text-xl font-bold">Username</h1>
                      </div>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa.
                      </p>
                      <div className="user_misc_details flex flex-wrap justify-center sm:justify-start items-center gap-2 font-semibold mt-2">
                        <button
                          className="contact_info bg-[#0B73DA]  text-sm px-4 py-2 rounded hover:bg-blue-700"
                          onClick={() => setShowContactInfo(!showContactInfo)}
                        >
                          CONTACT INFO
                        </button>
                        <button className="contact_info bg-[#0B73DA] text-sm px-4 py-2 rounded hover:bg-blue-700">
                          1,043 CONNECTIONS
                        </button>
                        <div className="contact_info flex items-center text-sm p-1 rounded gap-1">
                          <BiSolidNavigation className="text-blue-600" />
                          <span>City, country</span>
                        </div>
                      </div>

                      {showContactInfo && (
                        <div className="contact-info-details text-sm mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="mb-1">
                            <span className="font-bold">Email:</span>{" "}
                            <span>{data && data.basicInfo.email}</span>
                          </p>
                          <p>
                            <span className="font-bold">Mobile:</span>{" "}
                            <span>{data && data.basicInfo.mobileNo}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </section>

                  <div className="user-head-controls flex border-b border-gray-200">
                    {controlBtns.map((btn, index) => (
                      <button
                        key={index}
                        className={`py-3 px-2 text-center text-sm font-medium flex-1 transition-colors
                          ${sectionIndex === index
                            ? `bg-[#0B73DA] `
                            : `bg-transparent text-gray-600 hover:text-blue-600`
                          }`}
                        onClick={() => setSectionIndex(index)}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>

                  <div className="content-section mt-6">
                    {sections[sectionIndex]}
                  </div>
                </div>
              </section>

              <section className="w-full lg:w-1/3">
                <RequestBox />
              </section>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Profile;