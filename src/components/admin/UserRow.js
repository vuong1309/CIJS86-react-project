import React from 'react'
import axios from 'axios';

export const RenderRow = ({user,onClick}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.delete(`https://64f726be9d77540849533178.mockapi.io/Users/${user.id}`)
          .then(() => {
            console.log('Object đã được xóa thành công');
          })
          .catch((error) => {
            console.error('Lỗi khi xóa object:', error);
          });
          onClick()
      };  
  return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
            <td scope='row' className='px-6 py-4'>{user.id}</td>
            <td scope='row' className='px-6 py-4'>{user.username}</td>
            <td scope='row' className='px-6 py-4'>{user.email}</td>
            <td scope='row' className='px-6 py-4'>{user.password}</td>
            <td scope='row' className='px-6 py-4'>{user.dateofbirth}</td>
            <td scope='row' className='px-6 py-4'>{user.phonenumber}</td>
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