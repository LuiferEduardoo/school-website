import { Link } from "react-router-dom";
import truncateContent from "../../utils/truncateContent";

const Content = (props) => {
    return (
        <article className="flex flex-col justify-between pb-6 w-full bg-white rounded-md h-[38rem] md:h[35rem] sm:h-[30rem] shadow-lg overflow-hidden">
            <section className="flex-grow">
                <img
                    src={props.image}
                    alt={props.nameImage}
                    className="w-full h-[15rem] lg:h-[12rem] sm:h-[10rem] object-cover"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">{props.name}</h3>
                    <div className="text-gray-500">
                        {truncateContent(props.content, 225)}
                    </div>
                </div>
            </section>
            <section className="px-4">
                <Link
                    to={props.link}
                    className="mt-8 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                    Ver más
                </Link>
            </section>
        </article>
    );
};

export default Content;