import ImageComponente from "./ImageComponent";
import Information from "./Information";

const HistoricalReview = () => {
    return (
        <section className="flex flex-col lg:flex-row h-auto lg:h-[25rem] w-full mt-12 bg-gray-100">
            <Information />
            <ImageComponente />
        </section>
    )
}

export default HistoricalReview