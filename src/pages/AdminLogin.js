import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ReactComponent as NetflixIcon } from '../assets/logo/Netflix-Logo.wine.svg';
import Netfliximg from '../assets/logo/Netflix-Logo.wine.png';
import { ThreeDotsFade } from "react-svg-spinners";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
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
        const validateusername = (username) => {
          const usernameRegex = /^[\s\S]*$/;
          return usernameRegex.test(username);
        };
    
        // Delayed username validation with a 500ms delay
        const validateusernameWithDelay = () => {
          clearTimeout(timeoutId); // Clear the previous timeout, if any
          timeoutId = setTimeout(() => {
            if (formData.username && !validateusername(formData.username)) {
              setError("Invalid username format. Please enter a valid username address.");
            } else {
              setError(null); // Clear the error if the username format is valid
            }
          }, 1500); // Delay validation by 1000ms
        };
    
        // Check username validation when the username (username) field changes
        if (formData.username) {
          validateusernameWithDelay();
        }
    
        // Cleanup function to clear the timeout
        return () => {
          clearTimeout(timeoutId);
          setError(null);
        };
    }, [formData.username]);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        
        // Regex for username validation
        // const usernameRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        
        // Regex for password validation (allow any
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        
        // if (!usernameRegex.test(formData.email)) {
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
                user.username === formData.username && user.password === formData.password
            );
            
            console.log(authenticatedUser);
            if (authenticatedUser) {
            // Authentication successful
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                setError(null);
                setLoading(false);
            // Redirect to the Account page
                window.location.href = "/dashboard";
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
        <div className='w-full h-screen'>
        <img className='sm:block absolute w-full h-full object-cover' 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt='/' 
        />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='relative w-full px-8 pt-0 z-50'>
                <div className='flex justify-center h-[150px]'>
                <img className='pb-[-30spx]' src={Netfliximg}/>
                </div>
                <p className='text-center text-3xl font-medium text-white pb-4'>For Admin</p>
                <div className='max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-center text-3xl font-medium'>Log In</h1>
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input className='p-3 my-2 bg-[#333] rounded' 
                            type='text' 
                            placeholder='Admin'
                            name='username'
                            value={formData.username}
                            onChange={handleChange} 
                            ></input>
                            <input className='p-3 my-2 bg-[#333] rounded' 
                            type='password' 
                            placeholder='Password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            ></input>
                            {error && <p className="text-red-600">{error}</p>}
                            <button className='py-3 my-6 bg-red-600 rounded font-medium' 
                            type='submit'>
                                {
                                    loading ? (
                                        <div className='flex justify-center'>
                                            <ThreeDotsFade className='self-center' color="white"/>
                                        </div>                                       
                                        ) 
                                        : ('Login') 
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </>
          );
}
export default AdminLogin;

// render (    
//     <>
//         <div className='w-full h-screen'>
//         <img className='sm:block absolute w-full h-full object-cover' 
//         src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
//         alt='/' 
//         />
//             <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
//             <div className='relative w-full px-8 pt-24 z-50'>
//                 <div className='flex justify-center h-[150px]'>
//                 <img className='pb-[-30spx]' src={Netfliximg}/>
//                 </div>
//                 <p className='text-center text-3xl font-medium text-white pb-4'>For Admin</p>
//                 <div className='max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white'>
//                     <div className='max-w-[320px] mx-auto py-16'>
//                         <h1 className='text-center text-3xl font-medium'>Log In</h1>
//                         <form className='w-full flex flex-col py-4'>
//                             <input className='p-3 my-2 bg-[#333] rounded' type='email' placeholder='User' onChange={handleInputUserChange} autoComplete='email'></input>
//                             <input className='p-3 my-2 bg-[#333] rounded' type='password' placeholder='Password'onChange={handleInputPasswordChange} autoComplete='current-password'></input>
//                             <button className='py-3 my-6 bg-red-600 rounded font-medium' onClick={handleLogin}>Login</button>
//                         </form>
//                     </div>
//                 </div>
//             </div> 
//         </div>
//     </>
// );