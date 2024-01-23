import { useRoutes, BrowserRouter, Outlet  } from 'react-router-dom'
import Auth from './../pages/auth'

const Routers = () => {
    let router = useRoutes([
        {
            path: 'auth/*',
            element: <Auth />
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