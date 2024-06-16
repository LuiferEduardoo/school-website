import { Routes, Route } from "react-router-dom";
import AcademicLevelsFeed from "./AcademciLevelsFeed";
import AcademicLevelsPost from "./AcademicLevelsPost";


const AcademicLevels = () => {
    return (
        <Routes>
            <Route path="/" element={<AcademicLevelsFeed />} />
            <Route path="/:id" element={<AcademicLevelsPost />} />
        </Routes>
    )
}

export default AcademicLevels