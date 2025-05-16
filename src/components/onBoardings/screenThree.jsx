import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../../public/Images/trophy.png";

const ScreenThree = () => {
    const navigate = useNavigate();
    
    const handleNextClick = () => {
        navigate('/onBoarding4');
    };
    
    const handleSkipClick = () => {
        navigate('/login');
    };
    
    return (
        <div className='bg-[#BBCAE0] h-screen overflow-hidden overflow-y-scroll relative'>
            <img
                className='absolute mt-[50px] right-10 w-[150px] mr-[100px]'
                src={img}
                alt="Trophy"
            />
            
            <div className='mt-[50px] flex flex-col gap-4 lg:w-3/5 mx-auto items-center justify-center p-8'>
                <h2 className='text-black font-extrabold text-4xl text-center leading-snug'>
                    Showcase Your Journey
                </h2>
                
                <img className='w-full' src="Images/onboarding/path.png" alt="Path" />
                
                <h3 className='text-black font-semibold text-2xl text-center mt-2'>
                    Average Student to IIT Topper
                </h3>
                
                <div className='flex w-full mt-6 gap-8 justify-center'>
                    <button
                        className='bg-[#BBCAE0] text-black px-6 py-2 rounded text-2xl font-medium'
                        onClick={handleSkipClick}
                    >
                        Skip
                    </button>
                    <button
                        className='bg-[#3A3285] text-white px-6 py-2 rounded-full text-2xl font-semibold'
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScreenThree;