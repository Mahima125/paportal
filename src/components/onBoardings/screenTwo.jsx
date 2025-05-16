import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenTwo = () => {
    const navigate = useNavigate();
    
    const handleNextClick = () => {
        navigate('/onboarding3');
    };
    
    const handleSkipClick = () => {
        navigate('/login');
    };
    
    return (
        <div className='w-full h-screen bg-[#BBCAE0] flex items-center justify-center'>
            <div className='flex flex-row w-full max-w-7xl mx-auto px-8'>

                <div className='w-1/2 flex justify-center'>
                    <img 
                        className='w-[450px]' 
                        src="Images/onboarding/group.png" 
                        alt="Collage of school memories" 
                    />
                </div>

                <div className='w-1/2 flex flex-col items-center'>
                    <div className='max-w-md mb-12'>
                        <h2 className='text-3xl font-bold text-center font-sans'>
                            Unlock the full <br />
                            potential of your school <br /> 
                            memories. Join <br /> 
                            AlumUnity, where the <br /> 
                            past meets the <br /> 
                            present, and <br />
                            connections last a <br />
                            lifetime
                        </h2>
                    </div>

                    <div className='flex justify-center w-full gap-8'>
                        <button
                            className='px-6 py-2 text-black bg-[#BBCAE0] text-lg font-medium'
                            onClick={handleSkipClick}
                        >
                            Skip
                        </button>
                        <button
                            className='bg-[#423998] text-white px-8 py-2 rounded-full text-lg font-medium'
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenTwo;