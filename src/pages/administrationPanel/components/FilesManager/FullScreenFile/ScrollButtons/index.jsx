import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";

const ScrollButtons = (props) => {

    const navigate = (direction) => {
        if (props.selectedImage === null) return;
    
        let newIndex;
        if (direction === 'left') {
            newIndex = (props.selectedImage - 1 + props.files.length) % props.files.length;
        } else if (direction === 'right') {
            newIndex = (props.selectedImage + 1) % props.files.length;
        }
        props.setSelectedImage(newIndex);
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