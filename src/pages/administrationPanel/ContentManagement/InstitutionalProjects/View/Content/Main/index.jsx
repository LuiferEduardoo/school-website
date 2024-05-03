import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from './MainContent';
import Create from './Create';
import Edit from './Edit';
import ProtectedRouteAdministrationPanelRouter from '../../../../../../../utils/ProtectedRouteAdministrationPanelRouter';

const Main = () => {
    return (
        <Routes>
            <Route path="*" element={<MainContent />} />
            <Route path="create" element={
                    <ProtectedRouteAdministrationPanelRouter>
                        <Create/>
                    </ProtectedRouteAdministrationPanelRouter>
                } />
            <Route path="edit/:institutionalProject" element={
                <ProtectedRouteAdministrationPanelRouter>
                    <Edit/>
                </ProtectedRouteAdministrationPanelRouter>
            } />
        </Routes>
    )
}

export default Main