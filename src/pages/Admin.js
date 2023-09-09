import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import sidebar_menu from '../components/admin/Sidebarmenu';


import '../components/admin/style.css'
import Dashboard from './Dashboard';


const Admin = () => {
    return (
        <div>
            <h1 className='text-white'>Admin Page</h1>
                <div className='dashboard-container'>
                    <Sidebar menu={sidebar_menu} />
                    
                    <div className='dashboard-body'>
                        <Routes>
                            <Route exact path="/admin/dashboard" element={<Dashboard />} />
                            <Route exact path="/admin/users" element={<div></div>} />
                            <Route exact path="/admin/films" element={<div></div>} />
                        </Routes>
                    </div>
                </div>
        </div>
    );
};

export default Admin;