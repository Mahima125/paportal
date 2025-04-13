import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import alumni from '../../assets/images/alumni.png';
import student from '../../assets/images/student.png';
import faculty from '../../assets/images/faculty.png';

const TripleLogin = () => {
  const [activeUser, setActiveUser] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);
  const [userData, setUserData] = useState({
    type: "Student",
    userID: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { login, signInWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    console.log("Location state received:", location.state);

    if (location.state?.activeUserType) {
      const userType = location.state.activeUserType;
      const buttonNumber =
        userType === "Student" ? 1 :
          userType === "Faculty" ? 2 :
            userType === "Alumni" ? 3 : 1;

      console.log(`Setting active user to ${buttonNumber} for type ${userType}`);
      setActiveUser(buttonNumber);
      setUserData((prev) => ({
        ...prev,
        type: userType,
      }));
    }
  }, [location.state]);

  const handleButtonClick = (buttonNumber) => {
    const type =
      buttonNumber === 1
        ? "Student"
        : buttonNumber === 2
          ? "Faculty"
          : "Alumni";

    setUserData(prev => ({
      ...prev,
      type: type
    }));
    setActiveUser(buttonNumber);
    setImageOpacity(0);
    setTimeout(() => setImageOpacity(1), 100);
  };

  function handleChange(e) {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });
  }

  function callBack() {
    navigate("/dashboard");
  }

  const handleLoginClick = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          userID: userData.userID,
          role: userData.type,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token.split(" ")[1];
        if (!token) {
          return;
        }
        login(token, callBack);
        setErrors(null);
      } else {
        const errorData = await response.json();
        setErrors(errorData.message || "Login Failed");
        setIsSubmitting(false);
        setUserData((pre) => {
          return {
            ...pre,
            email: "",
            password: "",
            userID: "",
          };
        });
      }
    } catch (err) {
      setErrors("Login Failed");
      console.log(err);
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      await signInWithGoogle(userData.type, callBack);
      setErrors(null);
    } catch (error) {
      console.error("Google sign in error:", error);
      setErrors("Google Sign In Failed");
      setIsSubmitting(false);
    }
  };

  const getSliderPosition = () => {
    if (activeUser === 1) return "0%";
    if (activeUser === 2) return "33.33%";
    if (activeUser === 3) return "66.66%";
    return "0%";
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#2C4261]">
      <div className="w-full h-12 md:h-16 bg-[#2C4261]"></div>

      <div className="flex-1 flex justify-center items-center px-4 py-6 md:py-9 bg-[#BCCBE1]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl">

          <div className="flex items-center justify-start w-full md:w-2/5 px-4 mt-8 md:mt-0">
            {activeUser === 1 && (
              <img
                src={student}
                alt="Student Image"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.2s ease-in-out",
                }}
                className="w-full max-w-lg h-auto object-contain"
              />
            )}
            {activeUser === 2 && (
              <img
                src={faculty}
                alt="Faculty Image"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.2s ease-in-out",
                }}
                className="w-full max-w-lg h-auto object-contain"
              />
            )}
            {activeUser === 3 && (
              <img
                src={alumni}
                alt="Alumni Image"
                style={{
                  opacity: imageOpacity,
                  transition: "opacity 0.2s ease-in-out",
                }}
                className="w-full max-w-lg h-auto object-contain"
              />
            )}
          </div>

          <div className="bg-white w-full md:w-1/2 shadow-xl rounded-3xl p-5 md:p-6 flex flex-col items-center">
            <div className="bg-[#BCCBE1] rounded-full w-full flex justify-center relative mb-6 text-white">
              <button
                className="absolute left-0 top-0 w-1/3"
                style={{
                  borderRadius: "999px",
                  left: getSliderPosition(),
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 0 20px rgba(30, 58, 138, 0.7)",
                  height: "54px",
                }}
              >
                <p className="font-extrabold">
                  {activeUser === 1
                    ? "STUDENT"
                    : activeUser === 2
                      ? "FACULTY"
                      : "ALUMNI"}
                </p>
              </button>

              <button
                onClick={() => handleButtonClick(1)}
                style={{
                  backgroundColor: activeUser !== 1 ? "#BCCBE1" : "#dbeafe",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: activeUser !== 1 ? "black" : "rgba(0, 0, 0, 0)", // hide text if active
                }}
                className="w-1/3 font-bold h-14"
              >
                STUDENT
              </button>

              <button
                onClick={() => handleButtonClick(2)}
                style={{
                  backgroundColor: activeUser !== 2 ? "#BCCBE1" : "#dbeafe",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: activeUser !== 2 ? "black" : "rgba(0, 0, 0, 0)",
                }}
                className="w-1/3 font-bold h-14"
              >
                FACULTY
              </button>

              <button
                onClick={() => handleButtonClick(3)}
                style={{
                  backgroundColor: activeUser !== 3 ? "#BCCBE1" : "#dbeafe",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: activeUser !== 3 ? "black" : "rgba(0, 0, 0, 0)",
                }}
                className="w-1/3 font-extrabold h-14"
              >
                ALUMNI
              </button>
            </div>

            <div className="w-full px-3 sm:px-6">
              <div className="flex flex-col text-[#1E2D43]">
                <p className="font-bold text-lg mb-1">Email</p>
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                    <FaRegEnvelope size={20} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                    className="pl-4 pr-12 py-3 w-full border-2 border-gray-300 bg-white  font-semibold shadow-sm rounded-full"
                    placeholder="Email address"
                    style={{ color: '#1e40af', '::placeholder': { color: '#3b82f6' } }}
                  />
                </div>

                <p className="font-bold text-lg mb-1">Password</p>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={(e) => handleChange(e)}
                    className="pl-4 pr-12 py-3 w-full border-2 border-gray-300 bg-white font-semibold shadow-sm rounded-full"
                    placeholder="Password"
                    style={{ color: '#1e40af', '::placeholder': { color: '#3b82f6' } }}
                  />
                </div>

                <div className="flex mt-6 mb-2">
                  <button
                    disabled={isSubmitting}
                    style={{
                      boxShadow: "0 0 10px rgba(30, 58, 138, 0.7)",
                    }}
                    className="text-lg font-bold text-white py-3 px-8 rounded-full mx-auto bg-[#163560] hover:bg-[#0d2040] transition-all duration-300 ease-in-out"
                    onClick={handleLoginClick}
                  >
                    {isSubmitting ? (
                      <span>Logging in...</span>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-row items-center my-4">
                <div className="w-1/3 bg-blue-900 h-0.5"></div>
                <div className="w-1/3 text-sm font-medium text-center text-blue-900 px-2">
                  or continue with
                </div>
                <div className="w-1/3 bg-blue-900 h-0.5"></div>
              </div>

              <div className="flex justify-center gap-4 mt-4 mb-4">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting}
                  style={{
                    boxShadow: "0 0 10px rgba(30, 58, 138, 0.7)",
                  }}
                  className="text-lg font-bold w-[75px] text-white p-2 rounded-full mx-auto bg-[#163560] hover:bg-[#0d2040] transition-all duration-200 ease-in-out"
                >
                  <FaGoogle size={22} className="mx-auto m-2" />
                </button>
                <button
                  style={{
                    boxShadow: "0 0 10px rgba(30, 58, 138, 0.7)",
                  }}
                  className="text-lg font-bold w-[75px] text-white p-2 rounded-full mx-auto bg-[#163560] hover:bg-[#0d2040] transition-all duration-200 ease-in-out"
                >
                  <FaFacebook size={22} className="mx-auto" />
                </button>
                <button
                  style={{
                    boxShadow: "0 0 10px rgba(30, 58, 138, 0.7)",
                  }}
                  className="text-lg font-bold w-[75px] text-white p-2 rounded-full mx-auto bg-[#163560] hover:bg-[#0d2040] transition-all duration-200 ease-in-out"
                >
                  <FaTwitter size={22} className="mx-auto" />
                </button>
              </div>

              {errors && (
                <p className="text-red-600 text-center font-medium mt-2">{errors} Try Again</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 md:h-16 bg-[#2C4261]"></div>
    </div>
  );
};

export default TripleLogin;