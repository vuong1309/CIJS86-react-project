import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import SideBarItem from './Sidebaritem';
import './style.css';

import logo from '../../assets/logo/Netflix-Logo.wine.png';
import LogoutIcon from '../../assets/icons/logout.svg';

function Sidebar({menu}) {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem("user");
        // Redirect to the Login page
        window.location.href = "/admin";
        };


    const __navigate = (id) => {
        setActive(id);
    }

  return (
    <nav className='sidebar absolute'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img
                        src={logo}
                        alt="logo" />
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' 
                            onClick={handleLogout}/>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Sidebar;