import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdministrationsPanelProvider } from "../../providers/AdministrationPanelContext";
import { AuthContext } from '../../providers/AuthContext';
import ProtectedRouteAdministrationPanelRouter from "../../utils/ProtectedRouteAdministrationPanelRouter";
import Sideber from './components/Sideber'
import Header from './components/Header'
import Position from './components/Position';
import SkeletonComponent from './Skeleton';
import Dashboard from './Dashboard';
import ContentManagement from './ContentManagement';
import UsersManagement from './UsersManagement';
import AdmissionRequest from './AdmissionRequest';
import Calendar from './Calendar';
import Schedule from './Schedule'
import FilesManagement from './FilesManagement';
import AccountSetting from './AccountSetting'

const AdministrationsPanel = () => {
    const {isLoading} = useContext(AuthContext);

    return (
        <AdministrationsPanelProvider>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sideber/>
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-scroll">
                    <Header />
                    <Position />
                    <div className='p-8 h-full'>
                        {isLoading ? (
                            <SkeletonComponent />
                        ) : (
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="content-management/*" element={<ContentManagement />} />
                                <Route path="users-management" element={
                                    <ProtectedRouteAdministrationPanelRouter>
                                        <UsersManagement/>
                                    </ProtectedRouteAdministrationPanelRouter>
                                } />
                                <Route path="admission-request" element={
                                    <ProtectedRouteAdministrationPanelRouter>
                                        <AdmissionRequest/>
                                    </ProtectedRouteAdministrationPanelRouter>
                                } />
                                <Route path="calendar" element={
                                    <ProtectedRouteAdministrationPanelRouter>
                                        <Calendar/>
                                    </ProtectedRouteAdministrationPanelRouter>
                                } />
                                <Route path="schedule" element={
                                    <ProtectedRouteAdministrationPanelRouter>
                                        <Schedule/>
                                    </ProtectedRouteAdministrationPanelRouter>
                                } />
                                <Route path="files-management/*" element={<FilesManagement/>} />
                                <Route path="account-setting" element={<AccountSetting />} />
                                <Route path="*" element={<Navigate to="" replace />} />
                            </Routes>
                        )}
                    </div>
                </main>
            </div>
        </AdministrationsPanelProvider>
    );
};

export default AdministrationsPanel;
