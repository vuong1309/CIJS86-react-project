import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './admin/Sidebar';
import sidebar_menu from './admin/Sidebarmenu';
const AddMovieForm = () => {
  const [movie, setMovie] = useState({
    type: '',
    backdrop_path: '',
    id: '',
    title: '',
    original_language: '',
    overview: '',
    poster_path: '',
    release_date: '',
    video: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://64e4cb01c55563802913c797.mockapi.io/movies', movie)
      .then((response) => {
        console.log('Object đã được thêm thành công:', response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi thêm object:', error);
      });

      navigate('/admin/films');
  };
  

  return (
    <>
        <h1 className='text-white'>Admin Page</h1>
        <div className='dashboard-container'>
            <Sidebar menu={sidebar_menu} />      
            <div className='dashboard-body'>  
                <div className='bg-white p-[100px]'>
                    <h3 className='text-3xl font-bold dark:text-black mb-2 '>Add movie form:</h3>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-6'> 
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Type:
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" name="type" value={movie.type} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                        Backdrop Path:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="backdrop_path" value={movie.backdrop_path} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Title:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="title" value={movie.title} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Original Language:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="original_language" value={movie.original_language} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Overview:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="overview" value={movie.overview} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Poster Path:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="poster_path" value={movie.poster_path} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Release Date:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="release_date" value={movie.release_date} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                            Video:
                        <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'type="text" name="video" value={movie.video} onChange={handleChange} />
                        </label>
                    </div>
                    <button className='text-white bg-blue' type="submit">Add movie  </button>
                    </form>
                </div>
            </div>    
        </div>
    </>
  );
};

export default AddMovieForm;
