import React, { useState, useContext } from 'react';
import { FilesManagerContext } from '..';
import Options from './Options';
import ScrollButtons from './ScrollButtons'
import File from './File';
import Information from './Information';

const FullScreenFile = (props) => {
    const {selectedImage, files, viewInformationImage } = useContext(FilesManagerContext)
    const [showInformation, setShowInformation] = useState(false);
    const [showLeftIcon, setShowLeftIcon] = useState(false);
    const [showRightIcon, setShowRightIcon] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX } = e;
        const windowWidth = window.innerWidth;
        const halfWindowWidth = windowWidth / 2;
    
        const hasLeftImage = selectedImage > 0;
        const hasRightImage = selectedImage < files.length - 1;
    
        if(clientX < halfWindowWidth && hasLeftImage) {
            setShowLeftIcon(true);
            setShowRightIcon(false);
        } else if(clientX > halfWindowWidth && hasRightImage) {
            setShowLeftIcon(false);
            setShowRightIcon(true);
        } else {
            setShowLeftIcon(false);
            setShowRightIcon(false);
        }
    };
    
    return (
        <div 
            className={`fixed top-0 left-0 z-50 w-full h-full bg-black transition-all duration-800 ease-in-out ${selectedImage !== null ? 'flex items-center justify-center opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseMove={handleMouseMove}
        >
            {selectedImage !== null && (
                <>
                    <section className='w-full h-full flex items-center justify-center relative'>
                        <ScrollButtons
                            showLeftIcon={showLeftIcon}
                            showRightIcon={showRightIcon}
                        />
                        <File 
                            selectedImage={selectedImage}
                            files={files}
                        />
                        <Options 
                            showInformation={showInformation}
                            setShowInformation={setShowInformation}
                        />
                    </section>
                    {viewInformationImage && (
                        <Information 
                            showInformation={showInformation}
                            setShowInformation={setShowInformation}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default FullScreenFile