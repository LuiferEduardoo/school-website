import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AcademicLevels from './AcademicLevels'
import News from './News';
import Banners from './Banners';
import ProtectedRouteAdministrationPanelRouter from "../../../utils/ProtectedRouteAdministrationPanelRouter";

const ContentManagement = () => {
    return (
        <>
            <Routes>
                <Route path="academic-levels/*" element={
                    <ProtectedRouteAdministrationPanelRouter>
                        <AcademicLevels/>
                    </ProtectedRouteAdministrationPanelRouter>
                } />
                <Route path="news/*" element={
                    <ProtectedRouteAdministrationPanelRouter>
                        <News />
                    </ProtectedRouteAdministrationPanelRouter>
                } />
                <Route path="institutional-projects" element={<h1>Hola 3</h1>} />
                <Route path="banners/*" element={
                    <ProtectedRouteAdministrationPanelRouter>
                        <Banners />
                    </ProtectedRouteAdministrationPanelRouter>
                } />
                <Route path="*" element={<Navigate to="../.." replace />} />
            </Routes>
        </>
    )
}

export default ContentManagement