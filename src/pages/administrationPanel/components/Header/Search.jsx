import { RiSearchLine } from "react-icons/ri";

const Search = () => {
    return (
        <>
            <form className="w-full md:[40%] lg:w-[20%] md:-order-none">
                <div className="relative">
                <RiSearchLine className="absolute left-2 top-3" />
                <input
                    type="text"
                    className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
                    placeholder="Search"
                />
                </div>
            </form>
        </>
    );
}

export default Search