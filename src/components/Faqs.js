import React, { useState } from 'react';
import { ReactComponent as PlusIcon } from '../assets/icons/icons8-plus.svg';


const Faqs = (props) => {
    const [item , setItem]  = useState(props.item);
    const handleToggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});
    };
    

    return (
        <>
            <div className={`flex-col bg-[#2D2D2D] max-w-[1375px] mx-auto text-2xl p-6 mb-2
            duration-500 group ${item.active === 1 ? 'is-active' : ''}`}>
                <div className="flex justify-between">
                    <button onClick={handleToggleActive} className="group-[.is-active]:font-bold block">
                    {item.header} 
                    </button>
                    <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[45deg]" onClick={handleToggleActive}>
                        <PlusIcon />
                    </div>
                </div>
                <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[300px] group-[.is-active]:py-6 group-[.is-active]:mt-0.5">
                    {item.body}
                </div>
            </div>
        </>
    );
};

export default Faqs;