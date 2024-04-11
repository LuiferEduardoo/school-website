import { Routes, Route, Navigate } from 'react-router-dom';
import { MainContent, SecondaryContent } from './Content'

const View = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<MainContent />} />
                <Route path=":academicId/*" element={<SecondaryContent />} />
            </Routes>
        </>
    )
}

export default View