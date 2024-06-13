import Information from "./Information";
import Form from "./Form";

const Content = () => {
    return (
        <div className="px-8 py-10 w-full">
            <div className="grid gap-8 w-full md:grid-cols-2 lg:gap-12">
                <Information />
                <Form/>
            </div>
        </div>
    )
}

export default Content