import React from 'react';
import { stories } from '../fixtures/content';
import Stories from '../components/Stories';
import Faqs from '../components/Faqs';
import { faqs } from '../fixtures/faqs';
import Footersignup from '../components/Footersignup'
import Navbar from '../components/Navbar.js';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <img className='opacity-80 sm:block w-full max-h-[43.75rem]'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />

            </div>
            <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg)]'>
            </div>
            <div>
                {stories.map((v, i) => (
                    <Stories index={i} item={v} key={i} />
                ))}
            </div>
            <div className='w-full bg-[#232323] h-2'></div>
            <div className='flex-col text-white content-center items-center py-[4.5rem]'>
                <h1 className='text-5xl font-bold text-center mb-6'>Frequently Asked Questions</h1>
                {faqs.map((v, i) => (
                    <Faqs index={i} item={v} key={i} />
                ))}
            </div>
            <Footersignup />
        </>
    );
};

export default Home;