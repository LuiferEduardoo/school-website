import { Routes, Route } from "react-router-dom";
import NewsFeed from "./NewsFeed";
import NewsPost from "./NewsPost";

const News = () => {
    return (
        <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/:link" element={<NewsPost />} />
        </Routes>
    )
}

export default News