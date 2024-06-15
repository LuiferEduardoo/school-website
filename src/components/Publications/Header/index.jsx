import { useContext } from "react";
import { PublicationsContext } from "..";
import DateComponet from "./Date";
import TimeAndShare from "./TimeAndShare";
import ImageComponent from "./ImageComponent";

const Header = () => {
    const {title} = useContext(PublicationsContext)
    return(
        <header className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">{title}</h1>
            <section className="w-full flex justify-between text-sm text-gray-500 p-1">
                <DateComponet />
                <TimeAndShare />
            </section>
            <ImageComponent />
        </header>
    )
}

export default Header