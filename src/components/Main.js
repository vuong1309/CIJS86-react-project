import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests.js'
import { MdAdd } from 'react-icons/md';
import VideoFullscreen from './VideoFullscreen.js';


const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestMain).then((response) => {
            setMovies(response.data)
        })
    }, [])

    const truncateString = (str, num) => {
        return str?.length > num ? str.slice(0, num) + '...' : str
    }

    // const videoRef = useRef(null);

    // const handlePlay = () => {
    //     videoRef.current.requestFullscreen();
    // }

    return (
        <div className='w-full h-[550px] relative'>
            <video
                className='object-cover w-full h-full brightness-[60%]'
                src={movie?.videoUrl} poster={movie?.thumbnailUrl} autoPlay muted loop />
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='w-full h-full mb-4 font-bold text-white text-1xl md:text-5xl lg:text-6xl drop-shadow-xl'>
                    {movie?.title}
                </p>
                <p className='text-sm italic text-gray-300'>Release date: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-300 drop-shadow-xl'>
                    {truncateString(movie?.description, 150)}
                </p>
                <div className='flex flex-row items-center gap-3 mt-3 md:mt-4 w-[10%]'>
                    <button>
                        <VideoFullscreen movie={movie} />
                    </button>
                    <button className='flex items-center flex-grow w-full px-2 py-1 text-xs text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20'>
                        <MdAdd size={30} className='mr-1' />
                        Add
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Main;