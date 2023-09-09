import React from 'react';
import Footersignup from '../components/Footersignup';
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='/' 
            />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='relative w-full px-8 pt-24 z-50'>
                    <div className='max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-medium'>Sign In</h1>
                            <form className='w-full flex flex-col py-4'>
                                <input className='p-3 my-2 bg-[#333] rounded' type='email' placeholder='Email' autoComplete='email'></input>
                                <input className='p-3 my-2 bg-[#333] rounded' type='password' placeholder='Password' autoComplete='current-password'></input>
                                <button className='py-3 my-6 bg-red-600 rounded font-medium'>Sign In</button>
                                <div className='flex justify-between items-center text-sm text-slate-500'>
                                    <label  for="remember"><input className='mr-2' type='checkbox' id='remember' name=""/>Remember me</label>
                                    <p>Need Help?</p>
                                </div>
                                <p className='pt-20'>
                                    <span className='text-slate-500 mr-2'>New to Netflix?</span>
                                    <Link to='/login'> 
                                    Sign In
                                    </Link>
                                </p>
                                <p className='pt-2'>
                                    <span className='text-slate-400 mr-2 text-xs' >This page is protected by 
                                    Google reCAPTCHA to ensure you're not a bot. <button className='text-[#0071eb]'>Learn more</button>
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                    <Footersignup />  
            </div>
        </>
    );
};

export default Login;