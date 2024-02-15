import { FcDocument  } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import isImageByElement from "./isImageByElement";
import formatBytes from "./formatBytes";


const Content = ({files, setExistingFiles, setNewFiles, setIdEliminateExistingFiles, idEliminateExistingFiles, typeFile, isExisting}) => {
    const removeFile = (file) => {
        if (isExisting) {
            setExistingFiles((prevFiles) => {
                const updatedFiles = prevFiles.filter((f) => f !== file);
                const updatedIdSet = new Set(idEliminateExistingFiles);
                updatedIdSet.add(file.id);
                setIdEliminateExistingFiles(updatedIdSet);
                return updatedFiles;
            });
        } else {
            setNewFiles((prevFiles) => {
                const updatedFiles = prevFiles.filter((f) => f !== file);
                return updatedFiles;
            });
        }
    };
    return (
        <>
            {files.map((file, index) => (
                <div key={index} className="flex justify-between items-center w-full gap-4">
                    <div className='flex justify-between w-full bg-white p-2 rounded-lg'>
                        <div className='flex justify-start items-center'>
                            {typeFile === 'image' ?
                                <>
                                    <img
                                        src={isImageByElement(file) ? URL.createObjectURL(file) : file.url}
                                        alt={`Preview ${index + 1}`}
                                        className="w-6 h-6 object-cover mr-2 rounded"
                                    />
                                    <p className='text-sm text-gray-400'>
                                        {`${file.name.slice(0, 10)}...${file.name.split('.').pop()}`}
                                    </p>
                                </> : 
                                <>
                                    <FcDocument className="w-6 h-6 object-cover mr-2 rounded" />
                                </>
                            }
                        </div>
                        <div className='flex justify-end items-center'>
                            {file.size && <p className='text-sm text-gray-400'>{formatBytes(file.size)}</p>}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <RiDeleteBin6Line
                            onClick={() => removeFile(file)}
                            className="text-gray-500 text-lg hover:text-red-500 transition-colors"
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Content