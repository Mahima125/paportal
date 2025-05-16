import React from "react";
import img from "../../../public/Images/home1.png";
import img4 from "../../../public/Images/header.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/onboarding1");
  };
  const handleRegisterClick = () => {
    navigate("/onboarding1");
  };
  const handleFeedbackClick = () => {
    navigate('/feedback');
  };
  
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#BCCBE1" }}>
      {/* Header */}
      <div>
        <img className="w-full" src={img4} alt="Header" />
      </div>

      <div className="container mx-auto px-4 md:px-6 flex-grow relative mt-16">
        <div className="mt-8 md:mt-12 flex flex-col items-center max-w-[1440px] mx-auto">
          {/* Main content wrapper - stack vertically on mobile, show image between content on larger screens */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start relative">
            {/* LEFT SIDE - PRAGYAN SCHOOL and Buttons */}
            <div className="flex flex-col space-y-6 md:space-y-8 z-10 w-full lg:w-2/5 mb-8 lg:mb-0">
              <div className="w-full p-6 md:p-12 rounded-2xl bg-[#BFBFBF] shadow-xl flex items-center justify-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1B4075]">PRAGYAN SCHOOL</p>
              </div>

              <div className="flex flex-col space-y-4 items-center md:items-start">
                <button
                  className="px-6 py-2 rounded-[34px] text-xl md:text-2xl font-medium shadow-md transition-transform hover:scale-105 w-40"
                  style={{ backgroundColor: "#FBE626", color: "#1B4075" }}
                  onClick={handleLoginClick}
                >
                  Login
                </button>

                <button
                  className="px-6 py-2 rounded-[34px] text-xl md:text-2xl font-medium shadow-md transition-transform hover:scale-105 w-40"
                  style={{ backgroundColor: "#FAE30D", color: "#163560" }}
                  onClick={handleRegisterClick}
                >
                  REGISTER
                </button>
              </div>
            </div>

            {/* MIDDLE - IMAGE - Only absolutely positioned on larger screens */}
            <div className="w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-0 my-8 lg:my-0 flex justify-center">
              <img
                loading="lazy"
                src={img}
                className="object-contain w-full max-w-[500px] lg:max-w-[800px] h-auto"
                alt="students"
              />
            </div>

            {/* RIGHT SIDE - ABOUT SECTION */}
            <div className="pl-12 w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0D0D0D] leading-tight text-center lg:text-left lg:pl-10">ABOUT.</h1>

              <p className="text-lg md:text-xl w-full lg:w-[390px] text-[#0D0D0D] mt-6 leading-[1.7] tracking-wider text-center lg:text-left lg:pl-10">
                Established in 2002, Pragyan is one of the finest schools of Noida –
                Greater Noida. Set on a beautiful campus of 10 acres, we are a
                coeducational K–12 school affiliated to CBSE. Our extended hours up to
                4 pm allow students to have more time to Study as well as pursue wider
                interests in Sport, Art, Dance and Music. Pragyan School is committed to
                be an educational institution of excellence which provides all-round
                comprehensive quality education in a safe environment.
              </p>
            </div>
          </div>
        </div>

        {/* Divider Lines */}
        <div className="my-4 border-t border-[#BCCBE1]"></div>
        <div className="my-4 border-t border-[#BCCBE1]"></div>

        {/* Footer */}
        <div className="flex w-full justify-between py-8">
          <span onClick={handleFeedbackClick} className="text-lg md:text-2xl font-bold uppercase text-[#0D0D0D] cursor-pointer text-left">feedback</span>
          <span className="text-lg md:text-2xl font-bold uppercase text-right text-[#0D0D0D] cursor-pointer">Read More.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;