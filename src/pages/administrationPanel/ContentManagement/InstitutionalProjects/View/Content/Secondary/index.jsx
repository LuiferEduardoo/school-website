import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import SecondaryContent from './SecondaryContent'
import Create from './Create';
import Edit from './Edit';

const Secondary = () => {
    return (
        <Routes>
            <Route path="*" element={<SecondaryContent />} />
            <Route path="create" element={<Create/>} />
            <Route path="edit/:idPublication" element={<Edit/>} />
        </Routes>
    )
}

export default Secondary