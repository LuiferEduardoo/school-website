import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";
import PageNotFounde from "../components/PageNotFounde";

const MainRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/admisiones/*" element={<Admissions />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<PageNotFounde />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainRouter;
