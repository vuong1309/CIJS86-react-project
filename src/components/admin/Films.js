import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import sidebar_menu from './Sidebarmenu';
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteMovieForm from '../DeleteMovieForm';
import EditMovieForm from '../EditMovieForm';
import { RenderRow } from './MovieRow';


function Films() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [sortedData, setSortedData] = useState([]);



  const show = () => {
    setShowComponent2(false);
 
  };
  const handleClick2 = () => {
    setShowComponent2(!showComponent2);
    setShowComponent1(false)
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm)
    
  };




  

  
  console.log(data)

  useEffect(()=>{
    axios.get(`https://64e4cb01c55563802913c797.mockapi.io/movies?title=${searchTerm}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi tìm kiếm phim:', error);
      });

  },[searchTerm])
  useEffect(() => {
    fetch('https://64e4cb01c55563802913c797.mockapi.io/movies')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    let reversedData = data.slice().reverse();
    setSortedData(reversedData);
  }, [data]);




  const reloadMovies = () => {
      fetch('https://64e4cb01c55563802913c797.mockapi.io/movies')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };

 

  return (

    <div>
        <h1 className='text-white'>Admin Page</h1>
        <div className='dashboard-container'>
            <Sidebar menu={sidebar_menu} />      
            <div className='dashboard-body'>   
                <div className='dashboard-nav'>
                    <div>
                        <Link to='/admin/films/add' id='btn'class="text-white bg-blue ">Add movie</Link>   
                        <button className='text-white bg-red-700 ' onClick={handleClick2}>Edit Movie</button>

                    </div>
                    <div className='search'>
                        <form className='search-form'>
                            <div >
                                <label className='flex items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                    <input className='inputSearch-form' placeholder='Enter a movie title...' type="text" value={searchTerm} onChange={handleChange} />
                                </label>
                            </div>
                        </form>
                    </div>
                     
                </div>   
                <div id='table'className='bg-white relative overflow-x-auto"'>
                {showComponent2 && <EditMovieForm onClick={reloadMovies} show={show}/>}

                <h1 className='movie-data'>Movie Data:</h1>
                {data.length ? (
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                        <th scope='col' className='px-6 py-3'>ID</th>
                        <th scope='col' className='px-6 py-3'>Type</th>
                        <th scope='col' className='px-6 py-3'>Title</th>
                        <th scope='col' className='px-6 py-3'>Release Date</th>
                        <th scope='col' className='px-6 py-3'>Original Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map(movie => (
                        <RenderRow movie={movie} onClick={reloadMovies}></RenderRow>
                        ))}
                    </tbody>
                    </table>
                ) : (
                    <div className='text-center text-2xl'>not found!</div>
                )}
                </div>
            
            </div>
        </div>
    </div>

  );
}

export default Films;
