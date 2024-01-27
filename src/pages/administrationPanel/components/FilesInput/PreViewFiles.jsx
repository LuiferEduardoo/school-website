import { FcDocument  } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";

const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));
    return Math.round(bytes / Math.pow(k, i), 2) + ' ' + sizes[i];
};
function isImageByElement(file) {
    return file instanceof File;
}

const PreViewFiles = ({files, setFiles, typeFile}) => {
    const removeFile = (index) => {
        setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles.splice(index, 1);
        return updatedFiles;
        });
    };
    return (
        <div className="mt-4 flex flex-col w-full gap-4">
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
                            onClick={() => removeFile(index)}
                            className="text-gray-500 text-lg hover:text-red-500 transition-colors"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default PreViewFiles