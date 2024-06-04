import React, { useContext, useState, useEffect } from "react";
import Icons from "./Icons";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { getFile } from "../../../../../../services/files.service";
import { Skeleton } from "@nextui-org/react";

const ImageContainer = (props) => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [showIcon, setShowIcon] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);
    const [imageBlob, setImageBlob] = useState(null);

    const handleToggleClick = (index) => {
        props.setSelectedImage(index);
    };

    useEffect(() => {
        const fetchImage = async () => {
            try {
                if(!props.file.isPublic){
                    setIsLoading(true)
                    const response = await getFile(accessToken, setAccessToken, refreshToken, setRefreshToken, props.file.url, props.file.isPublic)
                    setImageBlob(response); // Establecer el Blob de imagen en el estado
                }
            } finally{
                setIsLoading(false);
            }
        };
        fetchImage();
    }, []);


    return (
        isLoading ? (
            <Skeleton className="w-full h-full"/>
        ) : (
            <article className={`relative inline-block max-w-xs max-h-xs overflow-hidden`}
                onMouseEnter={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}
            >
                <section className={`${props.selectedKeys.has(props.file.id) ? 'shadow-md bg-blue-100' : ''}`}>
                    <img
                        src={props.file.isPublic ? props.file.url : URL.createObjectURL(imageBlob)}
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
        
    )
}

export default ImageContainer