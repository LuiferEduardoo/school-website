import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiBookContent } from 'react-icons/bi';
import { MdMarkEmailUnread } from 'react-icons/md';
import { RiDashboardLine, RiUserFill, RiFileCloudLine, RiCalendarEventLine, RiCalendarCheckFill } from 'react-icons/ri';
import { Breadcrumb } from 'flowbite-react';
import { contentManagementOptions } from './../Sideber/ShowOptions'

const whereIsIt = () => {
    const location = useLocation();

    const locationWithIcon = [
        { path: '', icon: RiDashboardLine, name: 'Dashboard' },
        { path: 'content-management', icon: BiBookContent, name: 'Gestión de contenido' },
        { path: 'users-management', icon: RiUserFill, name: 'Gestión de usuarios' },
        { path: 'admision-request', icon: MdMarkEmailUnread, name: 'Solicitudes de admisión' },
        { path: 'calendar', icon: RiCalendarEventLine, name: 'Calendario' },
        { path: 'schedule', icon: RiCalendarCheckFill, name: 'Horario' },
        { path: 'files-management', icon: RiFileCloudLine, name: 'Gestión de archivos' }
    ];

    const splitRoute = location.pathname.split('/');
    const path = !splitRoute[2] ? '/administration-panel' : `/administration-panel/${splitRoute[2]}/${splitRoute[3] && splitRoute[3]}`
    const pathVerify = (element) => {
        return !element.path ? `/administration-panel` : `/administration-panel/${element.path}/${splitRoute[3] && splitRoute[3]}`
    }
    const matchingElement = locationWithIcon.find((element) =>
        path === pathVerify(element)
    );
    const namePageSecond = contentManagementOptions.find((element) => element.path === `${splitRoute[2]}/${splitRoute[3]}` )
    
    console.log(matchingElement, location.pathname, splitRoute[2], splitRoute[3], namePageSecond)

    if (matchingElement) {
        return (
            <>
                <Link to=''>
                    <Breadcrumb.Item icon={matchingElement.icon}>
                        {matchingElement.name}
                    </Breadcrumb.Item>
                </Link>
                { namePageSecond && 
                    <Breadcrumb.Item>{namePageSecond.label}</Breadcrumb.Item>
                }
            </>
        );
    }

    return null; // Return null if no matching element is found
};

const Position = () => {
    return (
        <div className='mt-20 p-4'>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 rounded dark:bg-gray-800">
                {whereIsIt()}
            </Breadcrumb>
        </div>
    );
};

export default Position;