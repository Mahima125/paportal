import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import faculty from '../../assets/images/faculty.png';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";

const LoginPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState(null);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleChange(e) {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value,
        });
    }

    const handleLoginClick = async () => {

    };


    const handleGoogleSignIn = async () => {
        setIsSubmitting(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                userType: "HOD",
                createdAt: new Date()
            }, { merge: true });

            const token = await user.getIdToken();
            localStorage.setItem("token", token);

            navigate("/admin");

        } catch (error) {
            console.error("Google sign in error:", error);
            setErrors("Google Sign In Failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="w-full h-16 bg-[#2C4261]"></div>
            <div className="w-full min-h-screen bg-indigo-100 flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 max-w-6xl p-2 sm:p-5">
                    <div className="flex items-center justify-start p-2 sm:p-6 m-3 md:ml-0 md:w-1/2">
                        <img
                            src={faculty}
                            alt="Illustration"
                            className="w-72 md:w-96 lg:w-full max-w-lg"
                        />
                    </div>

                    <div className="bg-white w-full shadow-[0_0_30px_rgba(0,0,0,0.3)] md:w-5/6 lg:w-3/4 xl:w-2/3 mx-4 md:mx-0 rounded-3xl p-4 lg:p-5 m-4 md:mr-6 flex flex-col items-center">
                        <div className="bg-black px-12 h-[50px] rounded-full flex items-center justify-center w-full max-w-md mb-2">
                            <button className="bg-[#2C4261] text-white px-8 h-full rounded-full text-lg">
                                HOD
                            </button>
                        </div>

                        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
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
                                        onChange={handleChange}
                                        className="pl-4 pr-12 py-3 w-full border-2 border-gray-300 bg-white font-semibold shadow-sm rounded-full"
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
                                        onChange={handleChange}
                                        className="pl-4 pr-12 py-3 w-full border-2 border-gray-300 bg-white font-semibold shadow-sm rounded-full"
                                        placeholder="Password"
                                        style={{ color: '#1e40af', '::placeholder': { color: '#3b82f6' } }}
                                    />
                                </div>
                                <div className="flex gap-5 mx-auto mt-5">
                                    <button
                                        onClick={handleLoginClick}
                                        disabled={isSubmitting}
                                        style={{
                                            boxShadow: "0 0 10px rgba(30, 58, 138, 0.7)",
                                        }}
                                        className="text-lg font-bold text-white py-4 px-9 rounded-full mx-auto bg-[#163560] hover:bg-[#0d2040] transition-all duration-200 ease-in-out"
                                    >
                                        {isSubmitting ? (
                                            <span>Logging in...</span>
                                        ) : (
                                            <span>Login</span>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="w-full flex flex-row items-center mt-4">
                                <div className="w-1/3 bg-blue-900 h-0.5 scale-y-50"></div>
                                <div className="w-1/3 text-sm font-medium text-center text-blue-900">
                                    or continue with
                                </div>
                                <div className="w-1/3 bg-blue-900 h-0.5 scale-y-50"></div>
                            </div>

                            <div className="flex mt-4 mb-5 mx-auto">
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
                                <p className="text-red-600 text-center font-medium mt-2">{errors}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 bg-[#2C4261]"></div>

        </>
    );
};

export default LoginPage;