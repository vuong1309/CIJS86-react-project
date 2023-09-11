import React from 'react';

const Stories = (props) => {
    const {item , index}  = props;
    return (
        <>
            <div className='w-full bg-[#232323] h-2'></div>
            {index%2===0 ? 
            <div className=' flex text-white max-[960px]:flex-col max-[960px]:py-14 max-w-[1375px] max-[1375px]:mx-8 mx-auto py-[4.5rem]'>
                <div className='flex flex-col flex-1 max-[960px]:text-center text-left justify-center'>
                    <h1 className='font-bold text-5xl max-[960px]:text-3xl:text-center'>{item.title}</h1>
                    <p className='mt-4 text-2xl'>{item.subTitle}</p>
                </div>
                <div className='flex-1 max-[960px]:mx-auto'>
                    <img  src={item.image} alt={item.alt}/>
                </div>
            </div>:
            <div className='story_container flex flex-row-reverse text-white max-[960px]:flex-col max-[960px]:py-14 max-w-[1375px] max-[1375px]:mx-8 mx-auto py-[4.5rem]'>
                <div className='flex flex-col flex-1 max-[960px]:text-center text-left justify-center'>
                    <h1 className='font-bold text-5xl max-[960px]:text-3xl:text-center'>{item.title}</h1>
                    <p className='mt-4 text-2xl'>{item.subTitle}</p>
                </div>
                <div className='flex-1 max-[960px]:mx-auto'>
                    <img  src={item.image} alt={item.alt}/>
                </div>
            </div>
            
            }


        </>
    );
};

export default Stories;