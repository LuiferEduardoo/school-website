import React, { useContext, useState } from 'react';
import { FilesManagerContext } from '../..';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";

const ScrollButtons = (props) => {
    const {selectedImage, setSelectedImage, files } = useContext(FilesManagerContext)
    const navigate = (direction) => {
        if (selectedImage === null) return;
    
        let newIndex;
        if (direction === 'left') {
            newIndex = (selectedImage - 1 + files.length) % files.length;
        } else if (direction === 'right') {
            newIndex = (selectedImage + 1) % files.length;
        }
        setSelectedImage(newIndex);
    };
    return (
        <>
            <div className={`${props.showLeftIcon ? 'block' : 'hidden'} absolute top-[50%] left-10 text-white text-xl cursor-pointer p-4 active:opacity-50 bg-gray-900 rounded-full`} onClick={() => navigate('left')}>
                <FaChevronLeft />
            </div>
            <div className={`${props.showRightIcon ? 'block' : 'hidden'} absolute top-[50%] right-10 text-white text-xl cursor-pointer p-4 active:opacity-50 bg-gray-900 rounded-full`} onClick={() => navigate('right')}>
                <FaChevronRight />
            </div>
        </>
    )
}

export default ScrollButtons