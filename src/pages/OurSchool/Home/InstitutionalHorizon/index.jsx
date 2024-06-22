import Information from "./Information";
import ImageComponente from "./ImageComponent";

const InstitutionalHorizon = () => {
    return (
        <section className="flex flex-col lg:flex-row h-auto lg:h-[35rem] w-full mt-10 mb-20">
            <ImageComponente />
            <Information />
        </section>
    )
}

export default InstitutionalHorizon