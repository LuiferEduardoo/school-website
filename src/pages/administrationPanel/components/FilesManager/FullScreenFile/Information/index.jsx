import { useContext } from "react";
import { FilesManagerContext } from "../..";
import Header from "./Header";
import Details from "./Details";

const Information = (props) => {
    const {fileType, files, selectedImage} = useContext(FilesManagerContext);
    return (
        <section className={`${props.showInformation ? 'opacity-100 visible translate-x-0 w-[400px] h-full p-8' : 'w-[0px] opacity-0 invisible translate-x-full'} transition-all duration-500 ease-in-out bg-white text-gray-500`}>
            <Header 
                setShowInformation={props.setShowInformation}
            />
            <Details 
                fileType={fileType}
                files={files}
                selectedImage={selectedImage}
            />
        </section>
    )
}

export default Information