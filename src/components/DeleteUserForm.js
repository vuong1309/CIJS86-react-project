import React, { useState } from 'react';
import axios from 'axios';

const DeleteUserForm = () => {
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete(`https://64f726be9d77540849533178.mockapi.io/Users/${userId}`)
      .then(() => {
        console.log('Object đã được xóa thành công');
      })
      .catch((error) => {
        console.error('Lỗi khi xóa object:', error);
      });

      
  };

  return (

    <form onSubmit={handleSubmit} className='flex items-center bg-neutral-400 p-[20px] '>
      <div>
        <label>
          ID:
          <input type="text" className='inputSearch-form' placeholder='Enter a user ID.....'value={userId} onChange={handleChange} />
        </label>
      </div>
      <div className='pt-[34px]'>
        <button type="submit" className=' text-white bg-red-700 '>Delete</button>
      </div>
    </form>
  );
};

export default DeleteUserForm;
