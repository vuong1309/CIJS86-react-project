import React from 'react'
import axios from 'axios';

export const RenderRow = ({movie,onClick}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.delete(`https://64e4cb01c55563802913c797.mockapi.io/movies/${movie.id}`)
          .then(() => {
            console.log('Object đã được xóa thành công');
          })
          .catch((error) => {
            console.error('Lỗi khi xóa object:', error);
          });
          onClick()
      };  
  return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={movie.id}>
            <td scope='row' className='px-6 py-4'>{movie.id}</td>
            <td scope='row' className='px-6 py-4'>{movie.type}</td>
            <td scope='row' className='px-6 py-4'>{movie.title}</td>
            <td scope='row' className='px-6 py-4'>{movie.release_date}</td>
            <td scope='row' className='px-6 py-4'>{movie.original_language}</td>
            <td scope='row' className='px-6 py-4'>
            <div className='cursor-pointer'>
                <svg className='cursor-pointer' onClick={handleSubmit} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
                    <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
                </svg>
            </div>
            </td>
        </tr>
  )
}
