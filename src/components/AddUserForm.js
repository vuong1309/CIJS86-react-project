import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './admin/Sidebar';
import sidebar_menu from './admin/Sidebarmenu';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const [user, setUser] = useState({
      email: '',
      username: '',
      avatar: '',
      password: '',
      dateofbirth: '',
      phonenumber: '',
      id: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://64f726be9d77540849533178.mockapi.io/Users', user)
      .then((response) => {
        console.log('Object đã được thêm thành công:', response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi thêm object:', error);
      });
      navigate('/admin/users')
  };

  return (
    <>
        <h1 className='text-white'>Admin Page</h1>
        <div className='dashboard-container'>
            <Sidebar menu={sidebar_menu} />      
            <div className='dashboard-body'>  
                <div className='bg-white p-[100px]'>
                    <h3 className='text-3xl font-bold dark:text-black mb-2'>Add user form:</h3>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-6'> 
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Email:
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" name="email" value={user.email} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        User name:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="username" value={user.username} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Avatar:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="avatar" value={user.avatar} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Password:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="password" value={user.password} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Date of birth:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="dateofbirth" value={user.dateofbirth} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Phone number:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="phonenumber" value={user.phonenumber} onChange={handleChange} />
                        </label>
                    </div>
                    <button className='text-white bg-blue' type="submit">Add user</button>
                    </form>
                </div>
            </div>    
        </div>
    </>
  );
};

export default AddUserForm;
