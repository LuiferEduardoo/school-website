import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CalendarComponent from "./Calendar";

const OurSchool = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />} 
            />
            <Route
                path="calendario"
                element={<CalendarComponent/>}
            />
        </Routes>
    )
}

export default OurSchool