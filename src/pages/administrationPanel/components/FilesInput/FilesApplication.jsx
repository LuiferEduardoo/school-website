import { Button, useDisclosure} from "@nextui-org/react";
import PreViewFiles from './PreViewFiles'
import { Callout } from "@tremor/react";
import { ModalFilesApplication } from './ModalFilesApplication'


const FilesApplication = ({typeFile, haveManyFiles, files, setFiles}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <div>
                <Callout
                    title="Cargar desde aplicación"
                    color="yellow"
                >
                    Cargar los archivos por medio de la aplicación, son aquello que previamentes fueron subidos y se encuentran en nuestro sistema. 
                </Callout>
                <Button className='mt-6' color="primary" onPress={onOpen}>Agregar</Button>
                <PreViewFiles  files={files} setFiles={setFiles} typeFile={typeFile}/>
            </div>
            <ModalFilesApplication isOpen={isOpen} onClose={onClose} haveManyFiles={haveManyFiles} setFiles={setFiles}/>
        </>
    );
};

export default FilesApplication;
