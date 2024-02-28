import React, { useState } from 'react';
import Options from './Options'
import ScrollButtons from './ScrollButtons'
import File from './File';
import Information from './Information';

const FullScreenFile = (props) => {
    const [showInformation, setShowInformation] = useState(false);
    const [showLeftIcon, setShowLeftIcon] = useState(false);
    const [showRightIcon, setShowRightIcon] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX } = e;
        const windowWidth = window.innerWidth;
        const halfWindowWidth = windowWidth / 2;
    
        const hasLeftImage = props.selectedImage > 0;
        const hasRightImage = props.selectedImage < props.files.length - 1;
    
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
            className={`fixed top-0 left-0 z-50 w-full h-full bg-black transition-all duration-800 ease-in-out ${props.selectedImage !== null ? 'flex items-center justify-center opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseMove={handleMouseMove}
        >
            {props.selectedImage !== null && (
                <>
                    <section className='w-full h-full flex items-center justify-center relative'>
                        <ScrollButtons
                            selectedImage={props.selectedImage}
                            setSelectedImage={props.setSelectedImage}
                            files={props.files}
                            showLeftIcon={showLeftIcon}
                            showRightIcon={showRightIcon}
                        />
                        <File 
                            selectedImage={props.selectedImage}
                            files={props.files}
                        />
                        <Options 
                            selectedImage={props.selectedImage}
                            setSelectedImage={props.setSelectedImage}
                            files={props.files}
                            showInformation={showInformation}
                            setShowInformation={setShowInformation}
                            otherElement={props.otherElement}
                        />
                    </section>
                    <Information 
                        showInformation={showInformation}
                        setShowInformation={setShowInformation}
                        fileType={props.fileType}
                        files={props.files}
                        selectedImage={props.selectedImage}
                    />
                </>
            )}
        </div>
    )
}

export default FullScreenFile