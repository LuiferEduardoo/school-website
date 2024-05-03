import React, { useState } from "react";
import Icons from "./Icons";

const ImageContainer = (props) => {
    const [showIcon, setShowIcon] = useState(false); 

    const handleToggleClick = (index) => {
        props.setSelectedImage(index);
    };
    return (
        <article className={`relative inline-block max-w-xs max-h-xs overflow-hidden`}
            onMouseEnter={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
        >
            <section className={`${props.selectedKeys.has(props.file.id) ? 'shadow-md bg-blue-100' : ''}`}>
                <img
                    src={props.file.url}
                    alt={props.file.name}
                    loading="lazy"
                    className={`object-cover max-w-full max-h-full cursor-pointer rounded transition-transform transform ${props.selectedKeys.has(props.file.id) ? 'transform-clickIconSelect' : ''}`}
                    onClick={() => handleToggleClick(props.index)}
                />
            </section>
            <Icons 
                id={props.file.id}
                showIcon={showIcon}
                selectedKeys={props.selectedKeys}
                setSelectedKeys={props.setSelectedKeys}
            />
        </article>
    )
}

export default ImageContainer