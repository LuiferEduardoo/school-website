import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FcAddImage } from "react-icons/fc";
import PreViewFiles from './PreViewFiles'


const FileUpload = ({typeFile, haveManyFiles, files, setFiles}) => {
    const [initialFilesReceived, setInitialFilesReceived] = useState(true);

    useEffect(() => {
        // Cuando files tiene elementos por primera vez
        if (initialFilesReceived) {
            setFiles([])
            setInitialFilesReceived(false)
        }
    }, [setFiles]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(haveManyFiles ? prevFiles => [...prevFiles, ...acceptedFiles] : acceptedFiles)
    }, []);

    const maxFiles = haveManyFiles ? {} : { maxFiles: 1 };

    const { isDragActive, getRootProps, getInputProps } = useDropzone({
        onDrop,
        ...maxFiles,
        accept: {
            [`${typeFile}/*`]: []
        } // Solo acepta archivos que se especifique en el argumento
    });


    return (
        <div>
            <div
                {...getRootProps()}
                className={`flex flex-col items-center border-2 border-dashed p-8 mt-4 cursor-pointer bg-white ${
                    isDragActive ? 'border-blue-500' : 'border-gray-300'
                }`}
            >
                <input {...getInputProps()} />
                <FcAddImage className='text-9xl' />
                <p className="text-gray-500 text-center">
                    Arrastra y suelta aquí, o haz clic para seleccionarlas.
                </p>
            </div>
            <PreViewFiles  files={files} setFiles={setFiles} typeFile={typeFile}/>
        </div>
    );
};

export default FileUpload;
