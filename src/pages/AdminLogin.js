import React, { useState } from 'react';
import { ReactComponent as NetflixIcon } from '../assets/logo/Netflix-Logo.wine.svg'
import Netfliximg from '../assets/logo/Netflix-Logo.wine.png'

const AdminLogin = () => {
    const dataadmin = [
        {
            admin: "admin",
            password: "password"
        },
        {
            admin: "admin1",
            password: "password1"
        },
    ]
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const handleInputUserChange = (e) => {
        setUser(e.target.value)
    };
    const handleInputPasswordChange = (e) => {
        setPassword(e.target.value)
    };

    


    return (
        <>
            <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
            alt='/' 
            />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='relative w-full px-8 pt-24 z-50'>
                    <div className='flex justify-center h-[150px]'>
                    <img className='pb-[-30spx]' src={Netfliximg}/>
                    </div>
                    <p className='text-center text-3xl font-medium text-white pb-4'>For Admin</p>
                    <div className='max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-center text-3xl font-medium'>Log In</h1>
                            <form className='w-full flex flex-col py-4'>
                                <input className='p-3 my-2 bg-[#333] rounded' type='email' placeholder='User' onChange={handleInputUserChange} autoComplete='email'></input>
                                <input className='p-3 my-2 bg-[#333] rounded' type='password' placeholder='Password'onChange={handleInputPasswordChange} autoComplete='current-password'></input>
                                <button className='py-3 my-6 bg-red-600 rounded font-medium' onClick={handleLogin}>Login</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default AdminLogin;