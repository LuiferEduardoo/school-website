import { FilesManagerContext } from "../..";
import ImageContainer from "./ImageContainer";
import HasNoImage from "./HasNoImage";
import { useContext } from "react";

const Image = (props) => {
    const { files, selectedKeys, setSelectedKeys, setSelectedImage } = useContext(FilesManagerContext);
    return (
        <>
            {files.length === 0 ? (
                <HasNoImage />
            ) : (
                files.map((file, index) => (
                    <ImageContainer
                        key={index}
                        index={index}
                        file={file.file}
                        selectedKeys={selectedKeys}
                        setSelectedKeys={setSelectedKeys}
                        setSelectedImage={setSelectedImage}
                    />
                ))
            )}
        </>
    );
};

export default Image;
