import { useContext } from 'react';
import Graphic from './components/Graphic'
import InstitutionalProjects from './components/InstitutionalProjects';
import { AdministrationsPanelContext } from '../../../providers/AdministrationPanelContext';

const DashboardContent = () => {
    const { rolUser, superAdmin } = useContext(AdministrationsPanelContext);
    return (
        (
            superAdmin.includes(rolUser) ? <Graphic /> : <InstitutionalProjects />
        )
    );
};

export default DashboardContent;