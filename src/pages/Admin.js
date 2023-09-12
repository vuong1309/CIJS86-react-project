import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import sidebar_menu from '../components/admin/Sidebarmenu';


import '../components/admin/style.css'
import Dashboard from './Dashboard';


const Admin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem("user");
        // Redirect to the Login page
        window.location.href = "/admin";
        };
    return (
        <div>
                <div className='dashboard-container'>
                    <Sidebar menu={sidebar_menu} />
                    
                    <div className='dashboard-body'>
                    </div>
                </div>
        </div>
    );
};

export default Admin;