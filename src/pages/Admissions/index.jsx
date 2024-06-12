import { Routes, Route } from "react-router-dom";
import InformationAdmissions from "./InformationAdmissions";
import Answer from "./Answer";

const Admissions = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<InformationAdmissions />} 
            />
            <Route
                path="estado"
                element={<Answer/>}
            />
        </Routes>
    );
};

export default Admissions;
