import React from 'react';
import "./SearchMovie.css";
import Trailer from './Trailer';
import { MdAdd } from 'react-icons/md';
import ModalDetail from './ModalDetail';

const SearchMovie = ({ item }) => {

    return (
        <div className='movie-container inline-block relative rounded-md'>
            <img
                className='w-full h-[auto] block object-cover overflow-hidden rounded-t-md'
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <div className='h-[150px] w-full p-2 transition shadow-xl rounded-b-md bg-zinc-800 lg:p-4'>
                <div className='flex flex-row items-center w-full gap-2'>
                    <div className='flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300' >
                        <Trailer item={item} />
                    </div>
                    <div className='flex items-center justify-center w-6 h-6 text-white transition border-2 border-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300' >
                        <MdAdd size={30} />
                    </div>
                    <button
                        className='flex items-center justify-center w-4 h-4 ml-auto transition bg-white rounded-full cursor-pointer lg:w-6 lg:h-6 hover:bg-neutral-300'>
                        <ModalDetail item={item} />
                    </button>
                </div>
                <div>
                    <p className='w-full py-3 text-sm text-white'>{item?.title}</p>
                    <p className='text-green-500 '>IMDB : <span className='text-white'>{item?.vote_average}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SearchMovie;