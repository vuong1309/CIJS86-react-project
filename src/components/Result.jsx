import React from 'react'

export default function Result(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Box key={index} image={item.backdrop_path} title={item.original_title} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 min-[320px]:grid-cols-2 gap-5'>
            {boxes}
        </div>
    )
}


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='shadow min-h-[200px] mt-3 pb-1'>
            <img src={IMGPATH + props.image} alt="" className='w-full' />
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2xl text-white'>{props.title}</span>
            </div>
        </div>
    )
}