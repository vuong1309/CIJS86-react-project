import React from 'react';
import { MdAdd } from 'react-icons/md';
import ModalDetail from './ModalDetail';
import Trailer from './Trailer';


const Movie = ({ item }) => {

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2 group/hover h-[12vw]'>
            <img className='transition delay-300 shadow-xl duration group-hover/hover:opacity-90' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-[-30px] right-[10px] z-20 invisible w-full transition duration-200 delay-300 scale-0 opacity-0 sm:visible group-hover/hover:scale-110 group-hover/hover:-translate-y-[1vw] group-hover/hover:translate-x-[1vw] group-hover/hover:opacity-100 hover:z-30'>
                <img className=' object-cover w-full shadow-xl rounded-t-md transition duration h-[11vh]' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute z-10 w-full p-2 transition shadow-xl rounded-b-md bg-zinc-800 lg:p-4'>
                    <div className='flex items-center w-full gap-2'>
                        <div className='flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300'>
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
                        <p className='py-2 w-full md:max-w-[70%] lg:max-w-[60%] text-sm text-white'>{item?.title}</p>
                        <p className='text-green-500'>IMDB : <span className='text-white'>{item?.vote_average}</span></p>
                    </div>
                </div>
            </div>
        </div>

        // <div className='movie-container h-[350px] w-[160px] sm:w-[200px] md:w-[240px] lg:w-[320px] inline-block cursor-pointer relative rounded-md'>
        //     <img
        //         className='w-full h-[auto] block'
        //         src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        //         alt={item?.title}
        //     />
        //     <p className='p-2 text-white truncate text-center text-sm md:text-md lg:text-lg'>{item?.title}</p>
        //     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        //         <p className='hover:text-ellipsis white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
        //             {item?.title}
        //         </p>
        //         <Trailer item={item} />
        //     </div>
        // </div>
    );
};

export default Movie;