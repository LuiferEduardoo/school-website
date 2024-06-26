import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";


const AcademicLevels = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/horario" element={<Schedule />} />
        </Routes>
    )
}

export default AcademicLevels