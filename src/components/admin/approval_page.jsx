import phone2 from "../../../src/assets/svgs/phone2.svg";

import person from "./person.png";
import woman from "../../assets/images/woman.png";
import bluecheckmark from "./bluecheckmark.png";

import useScreenSize from "../../utils/useScreenSize";
import { useState } from "react";

// Approval Confirmation Dialog component
const ApprovalConfirmationDialog = ({ onClose, onApproveOnce, onApproveAlways }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md" onClick={onClose}>
      <div className="bg-white rounded-[50px] p-8 shadow-xl w-full max-w-4xl border-[3px] border-black" onClick={(e) => e.stopPropagation()}>
        {/* "User approved" text */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins']">User approved</h2>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mt-40 md:mt-60">
          {/* Approve only this time button */}
          <button 
            onClick={onApproveOnce}
            className="bg-[rgba(134,192,53,0.9)] w-full md:w-[280px] h-[60px] border hover:bg-[rgba(134,192,53,0.5)] border-[#86C035] text-black rounded-[40px] py-3 text-lg md:text-xl font-normal font-['Poppins']"
          >
            Approve only this time
          </button>
          
          {/* Approve always button */}
          <button 
            onClick={onApproveAlways}
            className="bg-[rgba(134,192,53,0.9)] border w-full md:w-[280px] h-[60px] hover:bg-[rgba(134,192,53,0.5)] border-[#86C035] text-black rounded-[40px] py-3 text-lg md:text-xl font-normal font-['Poppins']"
          >
            Approve always
          </button>
        </div>
      </div>
    </div>
  );
};

const ApprovalPage = () => {
  const screenSize = useScreenSize();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  
  const handleClickApprove = () => {
    setShowConfirmationDialog(true);
  };
  
  const handleApproveOnce = () => {
    console.log("Approved once");
    setShowConfirmationDialog(false);
  };
  
  const handleApproveAlways = () => {
    console.log("Approved always");
    setShowConfirmationDialog(false);
  };
  
  const handleClickDeny = () => {
    console.log("Denied");
  };
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Ellipses */}
      <div 
        className="fixed top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#163560]/30" 
        style={{ 
          borderRadius: '50%',
          transform: 'translate(15%, -30%)',
          zIndex: 0
        }} 
      />
      <div 
        className="fixed bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#163560]/30" 
        style={{ 
          borderRadius: '50%',
          transform: 'translate(35%, 35%)',
          zIndex: 0
        }} 
      />

      <div className="max-w-screen-xl mx-auto relative z-10 p-4 md:p-6 lg:p-8">
        {/* Top right images - significantly increased size to cover the ellipse */}
        <div className="absolute top-0 right-0 flex gap-2 mr-12">
          <div className="h-[200px] w-[100px] md:h-[260px] md:w-[130px] lg:h-[320px] lg:w-[160px]">
            <img src={phone2} alt="Phone" className="h-full w-full object-contain" />
          </div>
          <div className="h-[220px] w-[110px] md:h-[280px] md:w-[140px] lg:h-[340px] lg:w-[170px]">
            <img src={woman} alt="Woman" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col pt-20 md:pt-24 lg:pt-32 mb-20">
          {/* Approval section */}
          <div className="w-full pl-4 md:pl-8 lg:pl-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-500 mb-6 lg:mb-8">Approval Page</h1>
            
            <div className="mb-6 border-b-4 w-32 lg:w-40 border-[#1a237e]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a237e] font-semibold">Alumni</h2>
            </div>

            {/* Content layout matching reference image */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              {/* Left side info */}
              <div className="space-y-4 md:space-y-6 text-gray-800 max-w-lg">
                <div className="text-xl md:text-2xl lg:text-3xl">
                  <span className="font-bold mr-2">Name:</span> Navin Sharma
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl">
                  <span className="font-bold mr-2">Username:</span> navinsharma30
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl">
                  <span className="font-bold mr-2">Registration number:</span> 21E0880
                </div>
              </div>

              {/* Profile image - positioned to the right of the info */}
              <div className="md:ml-36">
                <img 
                  src={person} 
                  alt="User" 
                  className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-lg border-2 border-gray-300 object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Buttons and checkmarks in the center at end of content */}
          <div className="w-full mt-16 md:mt-20 lg:mt-24">
            <div className="flex justify-center gap-6 md:gap-10 lg:gap-16">
              <button 
                className="bg-[#8BC34A] hover:bg-[#7CB342] text-white px-8 md:px-12 lg:px-16 py-3 md:py-4 rounded-full text-xl md:text-2xl font-medium w-40 md:w-52"
                onClick={handleClickApprove}
              >
                Approve
              </button>
              <button 
                className="bg-[#D32F2F] hover:bg-[#C62828] text-white px-8 md:px-12 lg:px-16 py-3 md:py-4 rounded-full text-xl md:text-2xl font-medium w-40 md:w-52"
                onClick={handleClickDeny}
              >
                Deny
              </button>
            </div>
            
            {/* Checkmarks */}
            <div className="flex justify-center gap-6 md:gap-8 lg:gap-10 mt-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-800 flex items-center justify-center">
                <img src={bluecheckmark} alt="Checkmark" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-800 flex items-center justify-center">
                <img src={bluecheckmark} alt="Checkmark" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-800 flex items-center justify-center">
                <img src={bluecheckmark} alt="Checkmark" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      {showConfirmationDialog && (
        <ApprovalConfirmationDialog 
          onClose={() => setShowConfirmationDialog(false)}
          onApproveOnce={handleApproveOnce}
          onApproveAlways={handleApproveAlways}
        />
      )}
    </div>
  );
};

export default ApprovalPage;