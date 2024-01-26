import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiBookContent } from 'react-icons/bi';
import { RiDashboardLine, RiUserFill, RiFileCloudLine, RiCalendarEventLine, RiCalendarCheckFill, RiArrowRightSLine, RiArrowUpSLine   } from 'react-icons/ri';
import { MdMarkEmailUnread } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import ShowOptions from './ShowOptions'

const Nav = () => {
    const [isShowOptionsContentManagement, setShowOptionsContentManagement] = useState(false);
    const location = useLocation();

    const isActive = (path, moreRoutes) => {
        if(moreRoutes && location.pathname.startsWith(`/administration-panel${path}`) ){
            return true;
        }
        return location.pathname === `/administration-panel${path}`;
    };
    return (
        <nav className='text-gray-500 font-semibold'>
            <ul>
                <li>
                <Link to="" className={`flex items-center gap-3 p-4 ${isActive('') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <RiDashboardLine />
                    Dashboard
                </Link>
                </li>
                <li>
                <div 
                    className={`flex items-center gap-3 p-4 cursor-pointer ${isActive('/content-managemen', true) && 'bg-gray-200 rounded-lg transition-colors'}`} 
                    onClick={ () => setShowOptionsContentManagement(!isShowOptionsContentManagement)}
                >
                    <BiBookContent />
                    Gestión de contenido
                    {isShowOptionsContentManagement ? <RiArrowUpSLine className='transition-transform transform rotate-180'/> : <RiArrowRightSLine className='transition-transform transform rotate-0'/>}
                </div>
                <CSSTransition
                    in={isShowOptionsContentManagement}
                    timeout={300}
                    classNames="options"
                    unmountOnExit
                >
                    <ShowOptions isShow={isShowOptionsContentManagement} isActive={isActive} />
                </CSSTransition>
                </li>
                <li>
                <Link to="users-management" className={`flex items-center gap-3 p-4 ${isActive('/users-management') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <RiUserFill />
                    Gestión de usuarios
                </Link>
                </li>
                <li>
                <Link to="admision-request" className={`flex items-center gap-3 p-4 ${isActive('/admision-request') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <MdMarkEmailUnread />
                    Solicitudes de admisión
                </Link>
                </li>
                <li>
                <Link to="calendar" className={`flex items-center gap-3 p-4 ${isActive('/calendar') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <RiCalendarEventLine  />
                    Calendario
                </Link>
                </li>
                <li>
                <Link to="schedule" className={`flex items-center gap-3 p-4 ${isActive('/schedule') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <RiCalendarCheckFill  />
                    Horario
                </Link>
                </li>
                <li>
                <Link to="files-management" className={`flex items-center gap-3 p-4 ${isActive('/files-management') && 'bg-gray-200 rounded-lg transition-colors'}`}>
                    <RiFileCloudLine />
                    Gestión de archivos
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav