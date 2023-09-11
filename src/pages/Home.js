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
            <div className='relative object-fit'>
                <img className='opacity-80  w-full max-h-[43.75rem] h-auto object-fit'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                    >
                </img>
                <div className='absolute bottom-[30%] text-center text-white w-full'>
                <h1 className='text-5xl	font-bold min-w-[960px]:font-black'>The biggest local and international hits. All here from 70,000 ₫.</h1>
                <p>Join today. Cancel anytime.</p>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
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