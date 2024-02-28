import React, {useState} from 'react';
import ViewFiles from "./ViewFiles"
import SelectionPanel from "./SelectionPanel"
import FullScreenFile from './FullScreenFile';

const FilesManager = (props) => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section className="grid grid-cols-1 gap-4">
            <SelectionPanel 
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys}
                files={props.files}
                acceptFiles={props.acceptFiles}
                otherElement={props.otherElement}
                fileSize={props.fileSize}
            />
            <ViewFiles 
                files={props.files}
                fileType={props.acceptFiles}
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys}
                setSelectedImage={setSelectedImage}
            />
            <FullScreenFile 
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                files={props.files}
                fileType={props.acceptFiles}
                otherElement={props.otherElement}
            />
        </section>
    )
}

export default FilesManager