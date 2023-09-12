import React from 'react';
import Avatar from '../../assets/icons/default-red.png'
import { AiOutlineLogout } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NavAccMenu = ({ visible }) => {

    if (!visible) {
        return null;
    }

    return (
        <div className='absolute right-0 flex flex-col items-center w-[160px] py-2 bg-gray-300 bg-opacity-30 border-[0.5px] border-white border-opacity-20 rounded top-14'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center w-full gap-3 px-3 group/item'>
                    <img src={Avatar} className='w-6 rounded-md' />
                    <p className='text-sm text-white group-hover/item:underline truncate'>
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                </div>
                <hr className='h-px my-3 bg-gray-600 border-0' />
                <div className='flex flex-row items-center w-full gap-3 px-3 group/item'>
                    <AiOutlineLogout className='text-white' size={23} />
                    <Link to="/">
                        <p className='text-sm text-white group-hover/item:underline'>
                            Sign Out
                        </p>
                    </Link>
                </div>
                <hr className='h-px my-3 bg-gray-600 border-0' />
                <Link to="https://help.netflix.com/en/">
                    <div className='px-3 py-1 text-sm text-center text-white hover:underline'>
                        Help Center
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default NavAccMenu;