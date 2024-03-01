import { Routes, Route, Navigate } from 'react-router-dom';
import View from './View'
import Edit from './Edit'

const Banners = () => {
    return (
        <>
            <Routes>
                <Route path="edit/:banner" element={<Edit/>} />
                <Route path="" element={<View />} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </>
    )
}

export default Banners