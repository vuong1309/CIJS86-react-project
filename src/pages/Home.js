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
            <div className='relative '>
                <img className='opacity-50  w-full max-h-[43.75rem] h-auto object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/93122675-8500-4b7c-818b-89a3474a06ab/VN-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                    >
                </img>
                <div className='hidden absolute bottom-[30%] text-center text-white w-full mx-auto sm:block sm:mx-5'>
                <h1 className='text-3xl	font-bold lg:font-black lg:text-5xl max-w-[1075px] mx-auto'>The biggest local and international hits. All here from 70,000 ₫.</h1>
                <p className='mt-4 font-normal text-2xl lg:text-xl'>Join today. Cancel anytime.</p>
                </div>
            </div>
            <div className=''>
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