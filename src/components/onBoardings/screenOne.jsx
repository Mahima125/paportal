import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../helper/navbar';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaThumbsUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ScreenOne = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/onboarding2');
    };

    return (
        <>
            <div className='overflow-hidden'>
                <Navbar />
                <div className='w-full min-h-screen text-gray-100 bg-[#BCCBE1] overflow-hidden flex flex-col lg:flex-row'>

                    <div className='lg:w-1/3 flex justify-center items-center image1'>
                        <img className='lg:h-[60vh] m-8' src="Images/on2.png" alt="Onboarding Visual 1" />
                    </div>

                    <div className='lg:w-1/3 flex flex-col justify-between py-3 items-center mt-0 title'>
                        <div className='my-auto flex flex-col gap-12 items-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-black font-bold p-3 text-3xl'>AlumnUnity</h1>
                                <p className='text-black text-center'>Connecting the School community</p>
                            </div>
                            <div>
                                <img className='lg:h-[40vh]' src="Images/logoHome.png" alt="Logo" />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='text-black font-bold text-xl text-center p-4'>Let's get Started</h3>
                                <button
                                    className='bg-[#3A3285] font-bold px-10 py-2 rounded-full text-white text-2xl shadow-md'
                                    onClick={handleStartClick}
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/3 flex justify-center items-center image2'>
                        <img className='lg:h-[60vh] mt-8' src="Images/on1.png" alt="Onboarding Visual 2" />
                    </div>
                </div>
            </div>

            <footer className="bg-[#1E1E1E] text-white text-sm pt-12 pb-6">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <FaMapMarkerAlt className="mb-2 text-lg" />
                            <h4 className="font-semibold mb-1">LOCATE US</h4>
                            <p className="text-white leading-relaxed text-sm">
                                Sector Gamma I, Greater Noida<br />
                                Dist. Gautam Budh Nagar,<br />
                                U.P. 201308, India
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <FaPhoneAlt className="mb-2 text-lg" />
                            <h4 className="font-semibold mb-1">CALL US</h4>
                            <p className="text-gray-300 text-sm">+91-120-4296701</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <FaEnvelope className="mb-2 text-lg" />
                            <h4 className="font-semibold mb-1">EMAIL US</h4>
                            <p className="text-gray-300 text-sm">info@pragyanschool.com</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <FaThumbsUp className="mb-2 text-lg" />
                            <h4 className="font-semibold mb-1">INTERACT WITH US</h4>
                            <div className="flex justify-center md:justify-start space-x-4 mt-2 text-gray-300 text-xl">
                                <FaFacebookF className="cursor-pointer hover:text-white" />
                                <FaTwitter className="cursor-pointer hover:text-white" />
                                <FaLinkedinIn className="cursor-pointer hover:text-white" />
                                <FaYoutube className="cursor-pointer hover:text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-6 mx-auto w-4/5"></div>

                <div className="text-center space-x-4 mb-2 text-white text-xs">
                    <a href="#" className="text-white">Disclaimer</a> |
                    <a href="#" className="text-white">Terms & Conditions</a> |
                    <a href="#" className="text-white">Sitemap</a> |
                    <a href="#" className="text-white">Careers</a>
                </div>

                <div className="text-center text-white text-xs mt-2">
                    © 2024 Pragyan School. C.B.S.E Affiliation No: 2131261, School Code: 60567. All rights reserved.<br />
                    <span className="text-white">Developed by <a href="#" className="text-white">Euro Infotek</a></span>
                </div>
            </footer>
        </>
    );
};

export default ScreenOne;