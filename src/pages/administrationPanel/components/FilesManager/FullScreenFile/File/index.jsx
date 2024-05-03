import React from 'react';
import getFileCategory from '../../../../../../utils/getFileCategory';
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
    const {url, name, ext, fileType} = props.files[props.selectedImage].file;
    const Component = COMPONENTS_MAP[getFileCategory(fileType)];

    return (
        <Component 
            url={url} 
            alt={name}
            extent={ext}
        />
    );
});

export default File;