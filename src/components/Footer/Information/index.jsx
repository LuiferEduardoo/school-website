import Nav from "./Nav";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const InformationsCampus = () => {
    return (
        <section className="w-full bg-blue-800 px-8 py-8 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:justify-items-center">
            <Nav />
            <Contact />
            <SocialMedia />
        </section>
    );
};

export default InformationsCampus;
