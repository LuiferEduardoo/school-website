import React, { useState, useEffect, useContext } from 'react';
import { FilesManagerContext } from '../..';
import { FaArrowLeft } from "react-icons/fa";
import FileIcons from "../../../FileIcons";

const Main = (props) => {
    const {files, selectedImage, setSelectedImage } = useContext(FilesManagerContext);
    const { name, ext } = files[selectedImage].file;

    const [formattedName, setFormattedName] = useState(name);

    useEffect(() => {
        const formatName = () => {
            let maxLength = window.innerWidth <= 768 ? 10 : 20;
            if (name.length > maxLength) {
                let partLength = Math.floor(maxLength / 2);
                return `${name.slice(0, partLength)}...${name.slice(-partLength)}`;
            }
            return name;
        };

        setFormattedName(formatName());

        const handleResize = () => {
            setFormattedName(formatName());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [name]);

    
    return (
        <section className='flex items-center gap-4'>
            <section className="cursor-pointer p-4 active:opacity-50 hover:bg-gray-900 rounded-full" onClick={() => setSelectedImage(null)}>
                <FaArrowLeft />
            </section>
            <section className='flex items-center gap-2'>
                <FileIcons extension={ext} />
                <span className='text-lg text-white'>{formattedName}</span>
            </section>
        </section>
    )
}

export default Main