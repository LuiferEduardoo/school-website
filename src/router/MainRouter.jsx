import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import PageNotFounde from "../components/PageNotFounde";

const MainRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<PageNotFounde />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainRouter;
