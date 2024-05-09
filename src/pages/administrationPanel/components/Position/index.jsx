import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiBookContent } from 'react-icons/bi';
import { MdMarkEmailUnread } from 'react-icons/md';
import { RiDashboardLine, RiUserFill, RiFileCloudLine, RiCalendarEventLine, RiCalendarCheckFill } from 'react-icons/ri';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { contentManagementOptions } from './../Sideber/ShowOptions'

const whereIsIt = () => {
    const location = useLocation();

    const locationWithIcon = [
        { path: '', icon: <RiDashboardLine />, name: 'Dashboard' },
        { path: 'content-management', icon: <BiBookContent />, name: 'Gestión de contenido' },
        { path: 'users-management', icon: <RiUserFill />, name: 'Gestión de usuarios' },
        { path: 'admission-request', icon: <MdMarkEmailUnread />, name: 'Solicitudes de admisión' },
        { path: 'calendar', icon: <RiCalendarEventLine />, name: 'Calendario' },
        { path: 'schedule', icon: <RiCalendarCheckFill />, name: 'Horario' },
        { path: 'files-management', icon: <RiFileCloudLine />, name: 'Gestión de archivos' }
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
    
    
    if (matchingElement) {
        return (
            <>
                <Breadcrumbs size="md">
                    <BreadcrumbItem startContent={matchingElement.icon}>
                        {matchingElement.name}
                    </BreadcrumbItem >
                    { namePageSecond && 
                        <BreadcrumbItem>{namePageSecond.label}</BreadcrumbItem>
                    }
                </Breadcrumbs>
            </>
        );
    }

    return null; // Return null if no matching element is found
};

const Position = () => {
    return (
        <div className='mt-20 p-4'>
            {whereIsIt()}
        </div>
    );
};

export default Position;