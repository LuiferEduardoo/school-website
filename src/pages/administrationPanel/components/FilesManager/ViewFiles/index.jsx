import React, { useState } from "react";
import Image from "./Image";
import File from "./File"

const ViewFiles = (props) => {

    return (
        <section className={`grid grid-cols-1 sm:grid-cols-5 gap-4`}>
            {props.fileType === 'image' ? (
                <Image
                    files={props.files} 
                    selectedKeys={props.selectedKeys}
                    setSelectedKeys={props.setSelectedKeys}
                    setSelectedImage={props.setSelectedImage}
                />
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