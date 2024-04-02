import { useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthContext";
import { AdministrationsPanelProvider } from "../../providers/AdministrationPanelContext";
import ProtectedRouteAdministrationPanelRouter from "../../utils/ProtectedRouteAdministrationPanelRouter";
import Sideber from './components/Sideber'
import Header from './components/Header'
import Position from './components/Position';
import Dashboard from './Dashboard';
import ContentManagement from './ContentManagement'
import Calendar from './Calendar';
import Schedule from './Schedule'
import FilesManagement from './FilesManagement';

const AdministrationsPanel = () => {
    const { accessToken, refreshToken, setRefreshToken, isLoading, setIsloading } = useContext(AuthContext);

    return (
        <AdministrationsPanelProvider>
            <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
                <Sideber/>
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-scroll">
                    <Header />
                    <Position />
                    <div className='p-8 h-full'>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="content-management/*" element={<ContentManagement />} />
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
                            <Route path="files-management" element={<FilesManagement/>} />
                            <Route path="*" element={<Navigate to="" replace />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </AdministrationsPanelProvider>
    );
};

export default AdministrationsPanel;
