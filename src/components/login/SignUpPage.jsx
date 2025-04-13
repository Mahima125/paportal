import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationModal from "./VerficationModal.jsx";
import { IoClose } from "react-icons/io5";
import student from '../../assets/images/student.png';

const InitialRegisterState = {
  type: "Student",
  userID: "",
  name: "",
  email: "",
  phoneNumber: "",
  dob: "",
  password: "",
  position: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [activeUser, setactiveUser] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(100);

  const [user, setUser] = useState(InitialRegisterState);

  function handleChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }

  const handleButtonClick = (buttonNumber) => {
    const type =
      buttonNumber === 1
        ? "Student"
        : buttonNumber === 2
          ? "Faculty"
          : "Alumni";
    setUser({ type: type });
    setactiveUser(buttonNumber);
    setImageOpacity(0);
    setTimeout(() => setImageOpacity(1), 100);
  };

  const sendOtp = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/otp/request-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: user.phoneNumber }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert("Otp sent to the given phone number");
          return { success: true, message: "OTP verified successfully" };
        } else {
          return { success: false, message: data.message || "Invalid OTP" };
        }
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return {
        success: false,
        message: "Failed to verify OTP. Please try again.",
      };
    }
  };

  const [showOtpModal, setShowOtpModal] = useState(false);
  const handleRegisterClick = () => {
    if (
      !user.name || user.name.trim() === "" ||
      !user.email || !user.email.includes("@") ||
      !user.phoneNumber || user.phoneNumber.trim() === "" ||
      !user.dob || user.dob.trim() === "" ||
      !user.password || user.password.trim() === "" ||
      !user.position || user.position.trim() === ""
    ) {
      alert("Fill the details properly!");
      return;
    }
    sendOtp();
    setShowOtpModal(true);
  };

  const onOtpSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          dob: user.dob,
          role: user.type,
          password: user.password,
          schoolCode: user.schoolCode,
          userID: user.userID,
        }),
      });
      if (response.ok) {
        setUser(InitialRegisterState);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#BCCBE1] flex flex-col justify-center items-center py-6 px-2 sm:p-2 md:p-8">
      <div className="block sm:hidden w-full flex justify-center mb-8 mt-6">
        <button className="bg-[#F4E23C] text-[#1B4075] font-extrabold py-4 px-6 rounded-full hover:bg-yellow-500 transition duration-300 z-10">
          CREATE YOUR ACCOUNT
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-7xl">
        <div className=" md:flex flex-1 items-center justify-center">
          <img
            src={student}
            alt="Student Image"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
              opacity: imageOpacity,
              transition: "opacity 0.2s ease-in-out",
            }}
            className="md:h-full"
          />
        </div>

        <div className="flex-1 bg-white shadow-[0_0_30px_rgba(0,0,0,0.3)] rounded-3xl p-1 flex flex-col items-center mt-4 mb-8 w-full sm:p-2 md:p-3 sm:mt-4 sm:mb-8 md:w-auto">
          <div className="hidden sm:flex w-full justify-center my-5">
            <button className="bg-[#F4E23C] text-[#1B4075] font-extrabold py-5 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
              CREATE YOUR ACCOUNT
            </button>
          </div>

          <div className="w-full px-3 sm:px-3 md:px-6">
            <div className="flex flex-col p-2 md:p-2 text-blue-900">
              <p className="font-bold text-lg mt-2">Name</p>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleChange}
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />
              
              <p className="font-bold text-lg mt-2">Email Address</p>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />

              <p className="font-bold text-lg mt-2">Phone Number</p>
              <input
                required
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />
              
              <p className="font-bold text-lg mt-2">Date Of Birth</p>
              <input
                required
                type="date"
                id="dob"
                name="dob"
                value={user.dob}
                onChange={handleChange}
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />
              
              <p className="font-bold text-lg mt-2">Teacher/Alumini/Student</p>
              <input
                required
                type="text"
                id="position"
                name="position"
                value={user.position}
                onChange={handleChange}
                placeholder="Teacher/Alumini/Student"
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />
              
              <p className="font-bold text-lg mt-2">Password</p>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                className="px-4 py-3 border border-slate-500 text-white bg-[#1B4075] font-semibold shadow-sm rounded-full mb-4 md:mb-3 focus:outline-none focus:bg-[#1B4075]"
              />
              
              <div className="flex justify-center my-6">
                <button
                  className="bg-[#F4E23C] text-[#1B4075] font-extrabold py-4 md:py-5 px-6 w-40 md:w-40 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
                  onClick={handleRegisterClick}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>

        {showOtpModal && (
          <div className="bg-overlay fixed top-0 left-0 bg-[#bccbe175] w-screen h-screen flex items-center justify-center z-50">
            <div className="bg-white relative w-[90%] md:w-fit h-fit rounded-[16px] p-[1rem] md:p-[1.5rem] flex flex-col items-center text-[#3A3285] gap-4 md:gap-6 text-center pt-[2rem] md:pt-[2.5rem]">
              <div
                className="closeBtn absolute top-2 right-2 text-[1.5rem] md:text-[2rem] cursor-pointer"
                onClick={() => {
                  setShowOtpModal(!showOtpModal);
                }}
              >
                <IoClose />
              </div>
              <h1 className="text-xl md:text-[2rem] font-bold">Verify phone number</h1>
              <h2>Enter OTP</h2>
              <VerificationModal
                length={4}
                onOtpSubmit={onOtpSubmit}
                setShowOtpModal={setShowOtpModal}
                phoneNumber={user.phoneNumber}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;