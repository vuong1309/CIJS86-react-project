import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { MdPlayArrow } from 'react-icons/md';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Trailer = ({ item }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300" onClick={openModal}><MdPlayArrow size={30} /></button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ReactPlayer url={item?.video} />

            </Modal>
        </div>
    );
}

export default Trailer;