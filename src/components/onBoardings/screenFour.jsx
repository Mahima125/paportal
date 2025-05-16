import React from 'react';
import { useNavigate } from 'react-router-dom';
import on13 from '../../assets/images/on13.jpeg';

const ScreenFour = () => {
    const navigate = useNavigate();
    
    const handleGoClick = () => {
        navigate('/login');
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#BBCAE0] px-4">
            <div className="flex flex-col md:flex-row items-center gap-24">
                {/* Image / Icon block - centered */}
                <div className="w-[270px] h-[248px] md:w-[540px] md:h-[496px] flex justify-center items-center">
                    <img
                        src={on13}
                        alt="Profile illustration"
                        className="w-1/2 h-1/2 object-cover rounded-2xl"
                    />
                </div>
                
                {/* Text and Button block - centered */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-6xl font-bold text-black mb-6">
                        Create or Login Your<br />
                        AlumUnity Account<br />
                        Now
                    </h1>
                    <div className="flex justify-center">
                        <button 
                            className="bg-[#3A3285] text-white px-6 py-2 rounded-full text-3xl font-semibold hover:bg-indigo-700 transition duration-200"
                            onClick={handleGoClick}
                        >
                            Go
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenFour;