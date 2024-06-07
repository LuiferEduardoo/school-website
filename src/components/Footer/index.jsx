import Maps from "./Maps";
import Information from "./Information";
import CopyRight from "./CopyRight";

const Footer = () => {
    return (
        <footer className="w-full h-auto">
            <section className="h-auto">
                <div className="h-96">
                    <Maps />
                </div>
                <Information />
            </section>
            <CopyRight />
        </footer>
    );
}

export default Footer