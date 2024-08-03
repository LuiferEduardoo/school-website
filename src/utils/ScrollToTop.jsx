import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        // Esto asegura que el espaciador se renderiza al cambiar de ruta
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop