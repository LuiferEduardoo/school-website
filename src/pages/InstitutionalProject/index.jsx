import { Routes, Route } from "react-router-dom";
import InstitutionalProjectsFeed from "./InstitutionalProjectsFeed";
import InstitutionalProjectPost from "./InstitutionalProjectPost";

const InstitutionalProyect = () => {
    return (
        <Routes>
            <Route path="/" element={<InstitutionalProjectsFeed/>} />
            <Route path="/:institituionalProyect/*" element={<InstitutionalProjectPost/>} />
        </Routes>
    )
}

export default InstitutionalProyect