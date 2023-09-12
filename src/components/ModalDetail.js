import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlineArrowDropDown, MdOutlineClose, MdAdd } from 'react-icons/md'
import Trailer from "./Trailer";


function ModalDetail({ item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const truncateString = (str, num) => {
        return str?.length > num ? str.slice(0, num) + '...' : str
    }

    return (
        <div>
            <button onClick={handleOpenModal} className='flex items-center justify-center w-4 h-4 ml-auto transition bg-white rounded-full cursor-pointer lg:w-6 lg:h-6 hover:bg-neutral-300'>
                <MdOutlineArrowDropDown size={50} />
            </button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.7)',

                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'auto',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        border: 'none',
                        transition: 'opacity 300ms ease-in-out',
                        duration: '3000ms',
                    }
                }}

            >
                <div className="relative w-auto mx-auto overflow-hidden rounded-md">
                    <div className="relative flex-auto duration-300 transform bg-zinc-900 drop-shadow-md">
                        <div className="relative h-[450px] w-[550px]">
                            <img className='h-[60%] w-full object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                            <div className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-60">
                                <MdOutlineClose onClick={handleCloseModal} className="text-white" size={18} />
                            </div>
                            <div className="absolute left-5 top-[40%] w-[80%]">
                                <p className="w-full mb-4 text-base font-bold text-white md:text-xl lg:text-xl drop-shadow-xl">
                                    {item?.title}
                                </p>
                                <div className="flex flex-row items-center gap-4">
                                    <Trailer item={item} />
                                    <div className='flex items-center justify-center w-6 h-6 text-white transition border-2 border-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300' >
                                        <MdAdd size={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="py-[20px] text-white px-[20px] flex flex-col justify-around ">
                                <p className="text-sm italic text-gray-300 pb-1">Release date: {item?.release_date}</p>
                                <p><span className="text-blue-500 font-bold italic">Overview:</span> {truncateString(item?.overview, 200)}</p>
                                <p className="text-green-500 py-2">IMDB : <span className="text-white">{item?.vote_average}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalDetail;