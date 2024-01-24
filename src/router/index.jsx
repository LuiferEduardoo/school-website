import { useRoutes, BrowserRouter, Outlet  } from 'react-router-dom'
import Auth from './../pages/auth'
import AdministrationsPanel from './../pages/administrationPanel'

const Routers = () => {
    let router = useRoutes([
        {
            path: 'auth/*',
            element: <Auth />
        },
        {
            path: 'administration-panel/*',
            element: <AdministrationsPanel />
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