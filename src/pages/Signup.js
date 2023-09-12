import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import Footersignup from '../components/Footersignup';
import Navbar from '../components/Navbar';
import { ThreeDotsFade } from "react-svg-spinners";


const Signup = () => {

    const [learnmore, setLearnmore] = useState(false);

    const toggleShowLearnMore = () => {
        setLearnmore(!learnmore);
    };

    const [formRegister, setFormRegister ] = useState({
        email:'',
        password:'',
        confirmpassword:'',
    })

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let timeoutId; // Store the timeout ID
    
    //     // Define an email validation function
    //     const validatePassword = (password) => {
    //       const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
    //       return passwordRegex.test(password);
    //     };
    
    //     // Delayed password validation with a 500ms delay
    //     const validatePasswordWithDelay = () => {
    //       clearTimeout(timeoutId); // Clear the previous timeout, if any
    //       timeoutId = setTimeout(() => {
    //         if (formRegister.password && !validatePassword(formRegister.password)) {
    //           setError("Password needs at least 8 characters including numbers and letters");
    //         } else {
    //           setError(null);
    //         }
    //       }, 1500); // Delay validation by 1000ms
    //     };
    
    //     if (formRegister.password) {
    //       validatePasswordWithDelay();
    //     }
    
    //     // Cleanup function to clear the timeout
    //     return () => {
    //       clearTimeout(timeoutId);
    //       setError(null);
    //     };
    // }, [formRegister.password]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister({ ...formRegister, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        // Regex for email validation
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    
        // Regex for password validation (at least 8 characters, at least one uppercase, one lowercase, and one digit)
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
        if (!emailRegex.test(formRegister.email)) {
          setError("Invalid email format. Please enter a valid email address.");
          setLoading(false);
          return;
        }
    
        if (!passwordRegex.test(formRegister.password)) {
          setError(
            "Password is invalid. It should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit."
          );
          setLoading(false);
          return;
        }
    
        if (formRegister.password !== formRegister.confirmpassword) {
          setError("Passwords do not match. Please confirm your password.");
          setLoading(false);
          return;
        }
    
        try {
            // Check if the email already exists in the database
            const response = await axios.get(
              `https://64f726be9d77540849533178.mockapi.io/Users?email=${formRegister.email}`
            );
        
            if (response.data.length > 0) {
              // Email already exists, display an error message
              setError("Email already exists. Please choose a different email.");
              setLoading(false);
            } else {
              // Email is not taken, proceed with registration
              const registrationResponse = await axios.post(
                "https://64f726be9d77540849533178.mockapi.io/Users",
                {
                  email: formRegister.email,
                  password: formRegister.password,
                }
              );
        
              // Handle the registration response
              setError(null);
              setLoading(false);
              alert("Registration successful!"); // Display a success message
              //redirect the user to the login page after successful registration
              window.location.href = "/login";
            }
          } catch (err) {
            setError("An error occurred while registering");
            setLoading(false);
        }        
      };
    

    return (
        <>
        <Navbar/>
        <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='/' 
            />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='relative w-full px-8 pt-24 z-50'>
                    <div className='max-w-[450px] min-h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-medium'>Sign Up</h1>
                            <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                                <input className='p-3 my-2 bg-[#333] rounded' 
                                type='email' 
                                placeholder='Email or phone number'
                                name='email'
                                value={formRegister.email}
                                onChange={handleChange} 
                                autoComplete='email'>                    
                                </input>
                                <input className='p-3 my-2 bg-[#333] rounded' 
                                type='password'
                                name='password'
                                value={formRegister.password}
                                onChange={handleChange}  
                                placeholder='Password'>
                                </input>
                                <input className='p-3 my-2 bg-[#333] rounded' 
                                type='password'
                                name='confirmpassword'
                                value={formRegister.confirmpassword}
                                onChange={handleChange}  
                                placeholder='Confirm Password'>
                                </input>
                                {error && <p className="text-red-600">{error}</p>}
                                <div className='flex justify-between items-center text-sm text-slate-500 mt-3'>
                                    <label  for="remember"><input className='mr-2' type='checkbox' id='remember' name=""/>I accept <Link to='/' className='text-[#0071eb]'> 
                                    the Terms and Conditions
                                    </Link></label>
                                </div>
                                <button className='py-3 my-6 bg-red-600 rounded font-medium' type='submit'>
                                {
                                    loading ? (
                                        <div className='flex justify-center'>
                                            <ThreeDotsFade className='self-center' color="white"/>
                                        </div>                                       
                                        ) 
                                        : ('Sign Up') 
                                }
                                </button>
                            </form>
                                <div className='flex justify-end items-center text-sm text-slate-500'>                      
                                    <Link to='/'> 
                                    <p>Need Help?</p>
                                    </Link>
                                </div>
                                <p className='pt-10'>
                                    <span className='text-slate-500 mr-2'>Already have an account?</span>
                                    <Link to='/login'> 
                                    Sign In
                                    </Link>
                                </p>
                                <p className='pt-2'>
                                    <span className='text-slate-400 mr-2 text-xs' >This page is protected by 
                                    Google reCAPTCHA to ensure you're not a bot. 
                                    <button className='text-[#0071eb] ml-1' onClick={toggleShowLearnMore}>Learn more</button>
                                    {learnmore && <p className='mt-4 text-xs text-slate-400'>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}
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

export default Signup;
