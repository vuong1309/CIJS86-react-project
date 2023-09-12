import { AiOutlineArrowLeft } from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdPlayArrow } from 'react-icons/md';


function VideoFullscreen({ movie }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timeout);

    }, []);

    return (
        <div>
            <button onClick={openModal} className='flex items-center flex-grow w-full px-2 py-1 text-xs text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20'>
                <MdPlayArrow size={30} className='mr-1' />
                Play
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'auto',
                        backgroundColor: 'black',
                        outline: 'none',
                        border: 'none',
                        transition: 'opacity 300ms ease-in-out',
                        height: '100vh',
                        width: '100vw',
                        padding: 0,
                        margin: 0,
                        zIndex: 99,
                    }
                }}
                contentLabel="Example Modal"
            >
                <div className='w-full h-full bg-black'>
                    <div>
                        {visible &&
                            <div className='fixed z-99 flex flex-row items-center w-full gap-6 p-2 bg-black bg-opacity-20'>
                                <AiOutlineArrowLeft onClick={closeModal} className='text-white cursor-pointer' size={40} />
                                <p className='text-sm font-bold text-white md:text-xl'>
                                    <span className='mr-2 font-light'>Watching :</span>
                                    {movie?.title}
                                </p>
                            </div>}
                    </div>

                    <video src={movie?.videoUrl} autoPlay controls className='object-cover w-full h-full' />
                </div>
            </Modal>
        </div>
    );
}

export default VideoFullscreen;
