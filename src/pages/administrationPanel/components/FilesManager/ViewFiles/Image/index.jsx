import ImageContainer from "./ImageContainer"

const Image = (props) => {
    return (
        <>
            {props.files.map((file, index) => (
                <ImageContainer
                    key={index}
                    index={index}
                    file={file.file}
                    selectedKeys={props.selectedKeys}
                    setSelectedKeys={props.setSelectedKeys}
                    setSelectedImage={props.setSelectedImage}
                />
            ))}
        </>
    )
}

export default Image