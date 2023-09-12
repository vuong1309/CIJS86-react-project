import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import sidebar_menu from './Sidebarmenu';
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditMovieForm from '../EditMovieForm';
import EditUserForm from '../EditUserForm';
import { RenderRow } from './UserRow';


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

  
  useEffect(()=>{
    axios.get(`https://64f726be9d77540849533178.mockapi.io/Users?email=${searchTerm}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi tìm kiếm phim:', error);
      });
  },[searchTerm])

  useEffect(() => {
    fetch('https://64f726be9d77540849533178.mockapi.io/Users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);


  const numberOfProperties = Object.keys(data).length;
  useEffect(()=>{
    reloadMovies();
  },[numberOfProperties])

  useEffect(() => {
    let reversedData = data.slice().reverse();
    setSortedData(reversedData);
  }, [data]);
  const reloadMovies = () => {
      fetch('https://64f726be9d77540849533178.mockapi.io/Users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };




  return (

    <div>
        <div className='dashboard-container'>
            <Sidebar menu={sidebar_menu} />      
            <div className='dashboard-body'>   
                <div className='dashboard-nav mt-5'>
                    <div>
                        <Link to='/admin/user/add' id='btn'class="text-white bg-black ml-3 ">Add user</Link>   
                        <button className='text-white bg-red-700 ' onClick={handleClick2}>Edit user</button>

                    </div>
                    <div className='search'>
                        <form className='search-form'>
                            <div >
                                <label className='flex items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                    <input className='inputSearch-form' placeholder='Enter a user email...' type="text" value={searchTerm} onChange={handleChange} />
                                </label>
                            </div>
                        </form>
                    </div>
                     
                </div>   
                <div id='table'className='bg-white relative overflow-x-auto"'>
                {showComponent2 && <EditUserForm onClick={reloadMovies} show={show}/>}

                <h1 className='movie-data'>User Data:</h1>
                {data.length ? (
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                        <th scope='col' className='px-6 py-3'>ID</th>
                        <th scope='col' className='px-6 py-3'>User Name</th>
                        <th scope='col' className='px-6 py-3'>Email</th>
                        <th scope='col' className='px-6 py-3'>Password</th>
                        <th scope='col' className='px-6 py-3'>Date of birth</th>
                        <th scope='col' className='px-6 py-3'>Phone number</th>
                        <th scope='col' className='px-6 py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map(user => (
                        <RenderRow user={user} onClick={reloadMovies}></RenderRow>
                        ))}
                    </tbody>
                    </table>
                ) : (
                    <div className='text-center text-2xl'>Loading...!</div>
                )}
                </div>
            
            </div>
        </div>
    </div>

  );
}

export default Films;
