import React, { useState, useEffect } from 'react';
import Result from './Result';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const apiUrl = 'https://64e4cb01c55563802913c797.mockapi.io/movies';



  useEffect(() => {
    // Hàm này sẽ gửi yêu cầu API khi searchTerm thay đổi
    async function fetchMovies() {
      try {
        const response = await fetch(`${apiUrl}?title=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          console.error('Yêu cầu API không thành công.');
          setMovies([]);
        }
      } catch (error) {
        console.error('Lỗi kết nối đến API:', error);
        setMovies([]);
      }
    }

    if (searchTerm) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [searchTerm]);
  
  

  return (
    <div className="bg-black p-[59px] shadow-xl mx-auto p-3">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full border border-black rounded text-slate-700 p-4 mb-[80px]" />
      {
        movies.length === 0
          ?
          <div className="text-3xl text-center mt-2 text-white"> Loading... </div>
          :
          <Result movies={movies} />

      }
    </div>

  );
}

export default Search;
