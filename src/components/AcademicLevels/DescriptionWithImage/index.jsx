import Information from "./Information";
import ImageComponent from "./ImageComponent";

const DescriptionWithImage = () => {
    return (
        <section className="flex flex-col md:flex-row h-auto w-full bg-white">
            <Information />
            <ImageComponent />
        </section>
    )
}

export default DescriptionWithImage