import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurSchool from "../pages/OurSchool";
import InstitutionalProyect from "../pages/InstitutionalProject";
import AcademicLevels from "../pages/AcademicLevels";
import Admissions from "../pages/Admissions";
import News from "../pages/News";
import Contact from "../pages/Contact";
import PagesError from "../components/PagesError";

const MainRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/nuestro-colegio/*" element={<OurSchool />}/>
                <Route path="/proyectos-institucionales/*" element={<InstitutionalProyect />}/>
                <Route path="/niveles-academicos/*" element={<AcademicLevels />}/>
                <Route path="/admisiones/*" element={<Admissions />} />
                <Route path="/noticias/*" element={<News/>}/>
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<PagesError error={404} />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainRouter;
