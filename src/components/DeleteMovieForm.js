import React, { useState } from 'react';
import axios from 'axios';

const DeleteMovieForm = () => {
  const [movieId, setMovieId] = useState('');

  const handleChange = (e) => {
    setMovieId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete(`https://64e4cb01c55563802913c797.mockapi.io/movies/${movieId}`)
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
          <input type="text" className='inputSearch-form' placeholder='Enter a movie ID.....'value={movieId} onChange={handleChange} />
        </label>
      </div>
      <div className='pt-[34px]'>
        <button type="submit" className=' text-white bg-red-700 '>Delete</button>
      </div>
    </form>
  );
};

export default DeleteMovieForm;
