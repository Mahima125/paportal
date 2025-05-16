import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <section className="min-h-screen bg-[#BCCBE1] flex flex-col relative pt-20 pb-16">
      <div className="bg-[#1E2D43] fixed top-0 left-0 h-16 w-full py-3 border-b border-[#202236] z-10">
       
      </div>

      {/* Main content - centered with proper spacing */}
      <div className="flex-1 flex items-center justify-center py-8 px-2">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-16">
          {/* Left side with text */}
          <div className="w-full lg:w-2/5 flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-[2px] w-6 bg-[#1E2D43]"></div>
              <p className="text-sm tracking-wider uppercase font-bold font-['DM_Sans'] text-[#1E2D43]">
                Rate our Services
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-[#1E2D43] leading-tight mb-4">
              Fill the form to submit your feedback
            </h1>
            <p className="text-base leading-relaxed font-['Poppins'] text-[#1E2D43]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.
            </p>
          </div>
          
          {/* Right side with form */}
          <div className="w-full lg:w-3/5 p-6 md:p-6 bg-[#1E2D43] rounded-2xl shadow-lg">
            <div className="rounded-lg text-white">
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#BDB6F0] font-semibold mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border rounded-full border-[#191919] p-2.5 text-sm font-medium text-[#919191] focus:outline-none focus:border-blue-500 shadow-sm"
                        placeholder="John Carter"
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#F3F3F3" strokeWidth="1.6"/>
                          <path d="M6 21C6 17.134 8.79086 14 12 14C15.2091 14 18 17.134 18 21" stroke="#F3F3F3" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#BDB6F0] font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border rounded-full border-[#191919] p-2.5 text-sm font-medium text-[#919191] focus:outline-none focus:border-blue-500 shadow-sm"
                        placeholder="Email address"
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#F3F3F3" strokeWidth="1.6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone number field */}
                <div>
                  <label htmlFor="phone" className="block text-sm text-[#BDB6F0] font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-transparent border rounded-full border-[#191919] p-2.5 text-sm font-medium text-[#919191] focus:outline-none focus:border-blue-500 shadow-sm"
                      placeholder="98765 43210"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.07686C10.8831 8.54544 10.6694 9.05288 10.2349 9.27606L7.69687 10.5455C8.7988 12.8667 10.6334 14.7012 12.9545 15.8031L14.2239 13.2651C14.4471 12.8306 14.9546 12.6169 15.4231 12.7743L19.8162 14.2721C20.2246 14.4082 20.5 14.7903 20.5 15.2208V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H17C9.54416 20.5 3.5 14.4558 3.5 7V5H3Z" stroke="#F3F3F3" strokeWidth="1.6"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div>
                  <label className="block text-sm text-[#BDB6F0] font-semibold mb-2">
                    Your service rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg
                        key={index}
                        className={`w-6 h-6 cursor-pointer ${index < 3 ? "text-[#FFD642]" : "text-[#191919]"}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1E2D43" strokeWidth="2.96" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Additional feedback */}
                <div>
                  <label htmlFor="feedback" className="block text-sm text-[#BDB6F0] font-semibold mb-2">
                    Additional feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows="3"
                    className="w-full bg-[#1E2D43] border border-[#AAAAAA] rounded-lg p-3 text-sm font-medium text-[#919191] focus:outline-none focus:border-blue-500 shadow-sm"
                    placeholder="If you have any additional feedback, please type it in here..."
                  ></textarea>
                </div>
                
                {/* Privacy policy checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border border-[#F3F3F3] rounded focus:ring-blue-500 bg-transparent"
                  />
                  <label htmlFor="privacy" className="block text-xs text-[#919191] font-normal">
                    I have read and accept the Privacy Policy.
                  </label>
                </div>
                
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#1B4075] hover:bg-[#1B4075]/90 text-white font-bold text-sm py-3 px-6 rounded-full transition duration-300 shadow-md"
                  >
                    Submit feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
    {/* Footer subscription - fixed at bottom */}
    <div className="bg-[#1E2D43] w-full py-4 border-t border-[#202236] mt-auto ">
    <div className="container mx-auto flex justify-center ml-72 pr-4 lg:pr-16">
      <div className="border border-[#BEBEBE] w-full md:w-72 lg:w-80 rounded-full p-1.5 shadow-sm">
        <div className="flex justify-between items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent rounded-full text-[#D9D9D9] text-sm font-normal py-1 px-3 focus:outline-none w-full"
          />
          <button
            className="bg-[#929292] hover:bg-[#929292]/90 text-[#1E2D43] text-xs font-medium py-2 px-4 rounded-full shadow-sm ml-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>      
  </div>
  </>
  );
};

export default FeedbackForm;