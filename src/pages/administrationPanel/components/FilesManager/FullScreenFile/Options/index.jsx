import Main from "./Main"
import Options from "./Options"

const OptionsComponent = (props) => {
    return (
        <section className="w-full z-100 flex justify-between text-white text-xl gap-4 absolute top-0 left-0 py-2 px-6">
            <Main
                files={props.files}
                setSelectedImage={props.setSelectedImage}
                selectedImage={props.selectedImage}
            />
            <Options 
                files={props.files}
                selectedImage={props.selectedImage}
                setShowInformation={props.setShowInformation}
                showInformation={props.showInformation}
                otherElement={props.otherElement}
            />
        </section>
    )
}

export default OptionsComponent