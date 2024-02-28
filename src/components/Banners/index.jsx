import React, { useState, useEffect } from 'react';
import slidesArray from './slidesArray'
import Image from './Image';
import ScrollButtons from './ScrollButtons';
import Position from './Position';

const Banners = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = slidesArray(props.slides);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % slides.length);
        }, 3000); // Cambia la imagen cada 3 segundos
        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, [currentIndex]);

    return (
        <section className={`w-full ${props.height ? props.height : 'h-[780px]' } relative group`}>
            <Image 
                styleImage={props.styleImage}
                slides={slides} 
                currentIndex={currentIndex}
            />
            <ScrollButtons
                slides={slides} 
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <Position 
                slides={slides} 
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </section>
    )
}

export default Banners