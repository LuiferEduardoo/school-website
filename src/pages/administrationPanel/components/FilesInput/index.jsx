import Submenu from './Submenu'
import FileUpload from './FileUpload'
import FilesApplication from './FilesApplication'


const FilesInput = ({typeFile, haveManyFiles, files, setFiles}) => {
    return (
        <>
            <Submenu 
                panels={{
                    'tab1': <FileUpload typeFile={typeFile} haveManyFiles={haveManyFiles} files={files} setFiles={setFiles}/>,
                    'tab2': <FilesApplication typeFile={typeFile} haveManyFiles={haveManyFiles} files={files} setFiles={setFiles}/>,
                }}/>
        </>
    );
};

export { FilesInput, FileUpload};
