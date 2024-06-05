import { useRoutes, BrowserRouter, Outlet  } from 'react-router-dom';
import MainRouter from './MainRouter';
import Auth from './../pages/auth'
import { AuthProvider } from '../providers/AuthContext'
import ProtectedRouteAdministrationPanel from '../utils/ProtectedRouteAdministrationPanel'
import AdministrationsPanel from './../pages/administrationPanel'

const Routers = () => {
    let router = useRoutes([
        {
            path:'/*',
            element: <MainRouter />
        },
        {
            path: 'auth/*',
            element: <Auth />
        },
        {
            path: 'administration-panel/*',
            element: <AuthProvider>
                <ProtectedRouteAdministrationPanel>
                    <AdministrationsPanel />
                </ProtectedRouteAdministrationPanel>
            </AuthProvider>
        }
    ])
    return router
}
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
}
export default AppRouter