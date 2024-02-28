import ImageContainer from "./ImageContainer";
import HasNoImage from "./HasNoImage";

const Image = (props) => {
    return (
        <>
            {props.files.length === 0 ? (
                <HasNoImage />
            ) : (
                props.files.map((file, index) => (
                    <ImageContainer
                        key={index}
                        index={index}
                        file={file.file}
                        selectedKeys={props.selectedKeys}
                        setSelectedKeys={props.setSelectedKeys}
                        setSelectedImage={props.setSelectedImage}
                    />
                ))
            )}
        </>
    );
};

export default Image;
