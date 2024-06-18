import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import Publication from "./Publication";

const InstitutionalProjectPost = () => {
    return (
        <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/:institituionalProyectPublication" element={<Publication/>} />
        </Routes>
    )
}

export default InstitutionalProjectPost