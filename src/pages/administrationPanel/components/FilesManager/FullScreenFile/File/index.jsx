import React from 'react';
import Image from './Image';
import Document from './Document';
import Multimedia from './Multimedia';
import Audio from './Audio';

const COMPONENTS_MAP = {
    'image': Image,
    'document': Document,
    'multimedia': Multimedia,
    'audio': Audio
};

const File = React.memo((props) => {
    const {url, name, extent, fileType} = props.files[props.selectedImage].file;
    const Component = COMPONENTS_MAP[fileType];

    return (
        <Component 
            url={url} 
            alt={name}
            extent={extent}
        />
    );
});

export default File;