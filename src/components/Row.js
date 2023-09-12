import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import requests from '../Requests.js'


const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(requests.requestRow).then((response) => {
            setMovies(response.data);
        });
    }, [fetchURL]);

    const [slideNum, setSlideNum] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 20
        if (direction === "left" && slideNum > 0) {
            setSlideNum(slideNum - 1)
            listRef.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === "right" && slideNum < 20) {
            setSlideNum(slideNum + 1)
            listRef.current.style.transform = `translateX(${-200 + distance}px)`
        }
        console.log(distance)
    }


    return (
        <>
            <div className='w-full h-full ml-3 pt-4 pb-4'>
                <h2 className='pl-4 pt-3 pb-6 font-bold text-white md:text-xl'>{title}</h2>
                <div className='relative group pb-4'>
                    <MdChevronLeft
                        onClick={() => handleClick("left")}
                        className='w-[50px] h-full text-white absolute left-0 z-10 top-0 bottom-0 m-auto hidden bg-black  opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
                        size={40}
                    />
                    <div className='flex ml-0 ease-linear translate-x-0 w-max' ref={listRef} >
                        {movies.filter(item => item.type === title).map((item, id) => (
                            < Movie key={id} item={item} />
                        ))}

                    </div>
                    <MdChevronRight
                        onClick={() => handleClick("right")}
                        className='w-[50px] h-full text-white absolute right-0 z-10 top-0 bottom-0 m-auto hidden bg-black opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
                        size={40}
                    />
                </div>
            </div>
        </>
    );
};

export default Row;