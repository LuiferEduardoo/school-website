import React, { useContext } from "react";
import { FilesManagerContext } from "..";
import Image from "./Image";
import File from "./File"

const ViewFiles = (props) => {
    const {fileType} = useContext(FilesManagerContext);

    return (
        <section className={`grid grid-cols-1 sm:grid-cols-5 gap-4`}>
            {fileType === 'image' ? (
                <Image/>
            ) : (
                <File 
                    files={props.files} 
                    selectedKeys={props.selectedKeys}
                    setSelectedKeys={props.setSelectedKeys}
                    setSelectedImage={props.setSelectedImage}
                />
            )}
        </section>
    );
};

export default ViewFiles;