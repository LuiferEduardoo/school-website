import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AcademicLevels from './AcademicLevels'

const ContentManagement = () => {
    return (
        <>
            <Routes>
                <Route path="academic-levels/*" element={<AcademicLevels/>} />
                <Route path="news" element={<h1>Hola 2</h1>} />
                <Route path="institutional-projects" element={<h1>Hola 3</h1>} />
                <Route path="banners" element={<h1>Hola 4</h1>} />
                <Route path="*" element={<Navigate to="../.." replace />} />
            </Routes>
        </>
    )
}

export default ContentManagement