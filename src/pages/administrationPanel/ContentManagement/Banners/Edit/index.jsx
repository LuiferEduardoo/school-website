import FilesManager from './../../../components/FilesManager'
const images = [
    
]

const Edit = () => {
    return (
        <>
            <FilesManager 
                files={images}
                acceptFiles='image'
                otherElement={true}
                fileSize={{
                    width: 1600,
                    height: 400
                }}
            />
        </>
    )
}

export default Edit