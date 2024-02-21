import { Routes, Route, Navigate } from 'react-router-dom';
import ViewComponent from './View';
import Create from './Create'
import Edit from './Edit'

const News = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<ViewComponent />} />
                <Route path="create" element={<Create/>} />
                <Route path="edit/:newsId" element={<Edit/>} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </>
    )
}

export default News 