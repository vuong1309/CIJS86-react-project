import React, { useState, useEffect, useCallback } from 'react'
import { ReactComponent as NetflixIcon } from '../../assets/logo/Netflix-Logo.wine.svg'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import Avatar from '../../assets/icons/default-red.png'
import NavAccMenu from './NavAccMenu';


const NavbarAccount = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const [showAcc, setShowAcc] = useState(false);

    const toggleShowAcc = useCallback(() => {
        setShowAcc((current) => !current);
    }, []);

    return (
        <div className={`z-40 w-full fixed bg-black md:px-10 bg-opacity-90 ${scrolled ? 'bg-black' : 'bg-transparent'}   `}>
            <div className='flex flex-row items-center px-0 py-4 transition duration-500 '>
                <Link to='/'>
                    <NetflixIcon className='h-7 lg:h-10 ' />
                </Link>
                <div className='flex flex-row items-center ml-auto gap-7'>
                    <div className='text-gray-200 cursor-pointer hover:text-gray-300'>
                        <Link to='/search'>
                            <AiOutlineSearch size={25} />
                        </Link>
                    </div>
                    <div onClick={toggleShowAcc} className='relative flex flex-row items-center gap-2 cursor-pointer'>
                        <div className='w-4 h-4 overflow-hidden rounded-md lg:w-8 lg:h-8'>
                            <img src={Avatar} alt="" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAcc ? 'rotate-180' : 'rotate-0'}`} />
                        <NavAccMenu visible={showAcc} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavbarAccount;