import React from 'react'
import { useNavigate } from 'react-router-dom'
import student from '../../assets/images/student.png';
import bag from '../../assets/images/bag.png';

const LoginPage = () => {
    const navigate = useNavigate();
    const handleNavigation = (userType) => {
        navigate("/TripleLogin", {
            state: {
                activeUserType: userType === 1 ? "Student" : userType === 2 ? "Faculty" : "Alumni"
            }
        });
    };

    return (
        <div className="w-full min-h-screen bg-[#BCCBE1] flex items-center justify-center py-4">
            <div className="hidden md:flex flex-row bg-white shadow-[0_0_30px_rgba(0,0,0,0.3)] p-10 w-3/4 rounded-2xl text-white my-10">
                <div className="h-auto w-1/3 p-4 flex flex-col items-center justify-center space-y-4">
                    <div className="w-full flex justify-center">
                        <img
                            src="/Images/LoginImages/Img1.png"
                            alt="Img1"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="/Images/LoginImages/Img2.png"
                            alt="Img2"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                </div>

                <div className="h-auto w-1/3 mt-10 px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center text-[#2C4261]">
                        LOGIN
                    </h2>

                    <div className="flex flex-col space-y-6 mt-10">
                        <button
                            onClick={() => navigate("/HodLogin")}
                            className="bg-[#163560] text-lg text-white py-4 px-4 rounded-full"
                        >
                            HOD
                        </button>
                        <button
                            onClick={() => handleNavigation(3)}
                            className="bg-[#163560] text-lg text-white py-4 px-4 rounded-full"
                        >
                            Alumni
                        </button>
                        <button
                            onClick={() => handleNavigation(2)}
                            className="bg-[#163560] text-lg text-white py-4 px-4 rounded-full"
                        >
                            Faculty
                        </button>
                        <button
                            onClick={() => handleNavigation(1)}
                            className="bg-[#163560] text-lg text-white py-4 px-4 rounded-full"
                        >
                            Student
                        </button>
                    </div>

                    <div className="flex flex-row items-center mt-12 p-2">
                        <div className="w-1/4 bg-[#1B4075] h-0.5 scale-y-50 mr-3"></div>
                        <div className="w-1/2 text-xs text-center text-[#2C4261]">
                            no account ? Register Now !
                        </div>
                        <div className="w-1/4 bg-[#1B4075] h-0.5 scale-y-50 ml-3"></div>
                    </div>

                    <div className="flex flex-col space-y-10 mt-4 items-center">
                        <button onClick={() => navigate("/signup")} className="text-lg font-bold w-1/2 bg-yellow-400 text-blue-900 py-4 px-4 rounded-full hover:bg-yellow-400 hover:text-blue-900">
                            REGISTER
                        </button>
                    </div>
                </div>

                <div className="h-auto w-1/3 p-4 flex flex-col items-center justify-center space-y-4">
                    <div className="w-full flex justify-center">
                        <img
                            src="/Images/LoginImages/Img3.png"
                            alt="Img3"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="/Images/LoginImages/Img4.png"
                            alt="Img4"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="flex md:hidden flex-col w-full h-screen px-4 py-0 bg-[#BCCBE1]">
                <div className="flex flex-col h-full relative pt-12">
                    <div className="absolute top-0 right-0">
                        <img
                            src={bag}
                            alt="Top right"
                            className="w-28 h-auto"
                        />
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-[#0F2959]">
                        CHOOSE
                    </h2>

                    <div className="bg-white shadow-md rounded-2xl p-4 mb-4 w-full">
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => handleNavigation(3)}
                                className="bg-[#0F2959] text-white py-2.5 px-4 rounded-full text-center font-medium"
                            >
                                Alumni
                            </button>
                            <button
                                onClick={() => handleNavigation(2)}
                                className="bg-[#0F2959] text-white py-2.5 px-4 rounded-full text-center font-medium"
                            >
                                Faculty
                            </button>
                            <button
                                onClick={() => handleNavigation(1)}
                                className="bg-[#0F2959] text-white py-2.5 px-4 rounded-full text-center font-medium"
                            >
                                Student
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mb-4">
                        <div className="w-1/4 h-px bg-gray-300 mr-2"></div>
                        <div className="text-xs text-center text-[#0F2959]">
                            no account? Register now!
                        </div>
                        <div className="w-1/4 h-px bg-gray-300 ml-2"></div>
                    </div>

                    <div className="flex justify-center mb-3">
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-yellow-400 text-[#0F2959] py-2 px-12 rounded-full font-bold"
                        >
                            REGISTER
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={student}
                            alt="Bottom"
                            className="w-32 h-auto"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage