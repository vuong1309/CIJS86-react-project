import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


import Footersignup from '../components/Footersignup';
import { ThreeDotsFade } from "react-svg-spinners";
import Navbar from '../components/Navbar';


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });   
    const [error, setError] = useState(null);
    // const [errorPassword, setErrorPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [learnmore, setLearnmore] = useState(false);

    const toggleShowLearnMore = () => {
        setLearnmore(!learnmore);
    };

    useEffect(() => {
        let timeoutId; // Store the timeout ID
    
        // Define an email validation function
        const validateEmail = (email) => {
          const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
          return emailRegex.test(email);
        };
    
        // Delayed email validation with a 500ms delay
        const validateEmailWithDelay = () => {
          clearTimeout(timeoutId); // Clear the previous timeout, if any
          timeoutId = setTimeout(() => {
            if (formData.email && !validateEmail(formData.email)) {
              setError("Invalid email format. Please enter a valid email address.");
            } else {
              setError(null); // Clear the error if the email format is valid
            }
          }, 1500); // Delay validation by 1000ms
        };
    
        // Check email validation when the email (email) field changes
        if (formData.email) {
          validateEmailWithDelay();
        }
    
        // Cleanup function to clear the timeout
        return () => {
          clearTimeout(timeoutId);
          setError(null);
        };
    }, [formData.email]);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        
        // Regex for email validation
        // const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        
        // Regex for password validation (allow any
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        
        // if (!emailRegex.test(formData.email)) {
        //     setError("Invalid email format. Please enter a valid email address.");
        //     return;
        // }
        
        // if (!passwordRegex.test(formData.password)) {
        //         setErrorPassword("Password  characters)is invalid.");
        //     return;
        // }
        
        try {
            const response = await axios.get(
            `https://64f726be9d77540849533178.mockapi.io/Users`
            );
            const userDataFromAPI = response.data;
        
                // Find a user with a matching email and password
            const authenticatedUser = userDataFromAPI.find((user) =>
                user.email === formData.email && user.password === formData.password
            );
            
            console.log(authenticatedUser);
            if (authenticatedUser) {
            // Authentication successful
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                setError(null);
                setLoading(false);
            // Redirect to the Account page
                window.location.href = "/account";
            } else {
            // Authentication failed
                setError("Incorrect email or password");
                setLoading(false);
            }
            } catch (err) {
                setError("An error occurred while logging in");
                setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='/' 
            />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='relative w-full px-8 pt-24 z-50'>
                    <div className='max-w-[450px] h-[660px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-medium'>Sign In</h1>
                            <form className='w-full flex flex-col py-4' 
                            onSubmit={handleSubmit}>
                                <input className='p-3 my-2 bg-[#333] rounded' 
                                type='text'
                                name="email" 
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                                />
                                <input className='p-3 my-2 bg-[#333] rounded' 
                                type='password' 
                                name="password"
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                                required 
                                ></input>
                                {error && <p className="text-red-600">{error}</p>}
                                {/* {errorPassword && <p className="error">{errorPassword}</p>} */}
                                <button className='py-3 mt-6 mb-2 bg-red-600 rounded font-medium text-center'
                                type='submit'>
                                    
                                {
                                    loading ? (
                                        <div className='flex justify-center'>
                                            <ThreeDotsFade className='self-center' color="white"/>
                                        </div>                                       
                                        ) 
                                        : ('Sign In') 
                                }
                                </button>
                                <div className='flex justify-between items-center text-sm text-slate-500'>
                                    <label  for="remember"><input className='mr-2' type='checkbox' id='remember' name=""/>Remember me</label>
                                    <p>Need Help?</p>
                                </div>
                            </form>
                                <p className='pt-20'>
                                    <span className='text-slate-500 mr-2'>New to Netflix?</span>
                                    <Link to='/signup'> 
                                    Sign Up
                                    </Link>
                                </p>
                                <p className='pt-2'>
                                    <span className='text-slate-400 mr-2 text-xs' >This page is protected by 
                                    Google reCAPTCHA to ensure you're not a bot. 
                                    <button className='text-[#0071eb] ml-1' onClick={toggleShowLearnMore}>Learn more</button>
                                    {learnmore && <p className='mt-4 text-xs text-slate-400 duration-700'>The information 
                                    collected by Google reCAPTCHA is subject to the Google <Link to='/' className='text-[#0071eb]'> 
                                    Privacy Policy </Link> 
                                    and <Link to='/' className='text-[#0071eb]'> 
                                    Terms of Service </Link>, and is used for providing, maintaining, 
                                    and improving the reCAPTCHA service and for general security purposes 
                                    (it is not used for personalized advertising by Google).</p>}
                                    </span>
                                </p>
                        </div>
                    </div>
                </div>
                    <Footersignup />  
            </div>
        </>
    );
};

export default Login;

                                    