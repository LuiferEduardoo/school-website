import Submenu from './Submenu'
import FileUpload from './FileUpload'
import FilesApplication from './FilesApplication'
import { PreViewFiles } from './PreViewFiles';


const FilesInput = ({typeFile, haveManyFiles=false, existingFiles, setExistingFiles, newFiles, setNewFiles, setIdEliminateExistingFiles, idEliminateExistingFiles}) => {
    return (
        <>
            <Submenu 
                panels={{
                    'tab1': <FileUpload 
                                typeFile={typeFile}
                                haveManyFiles={haveManyFiles} 
                                setNewFiles={setNewFiles}
                                existingFiles={existingFiles}
                                setIdEliminateExistingFiles={setIdEliminateExistingFiles}
                            />,
                    'tab2': <FilesApplication  
                                haveManyFiles={haveManyFiles} 
                                setNewFiles={setNewFiles}
                                existingFiles={existingFiles}
                                setIdEliminateExistingFiles={setIdEliminateExistingFiles}
                            />,
                }}
            />
            <PreViewFiles 
                typeFile={typeFile}
                existingFiles={existingFiles} 
                setExistingFiles={setExistingFiles} 
                newFiles={newFiles} 
                setNewFiles={setNewFiles}
                setIdEliminateExistingFiles={setIdEliminateExistingFiles}
            />
        </>
    );
};

export { FilesInput, FileUpload};
