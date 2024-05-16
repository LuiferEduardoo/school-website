import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import FilesManagementComponent from "./FilesManagement";

const FilesManagement = () => {
    return (
        <section className='flex flex-col gap-4'>
            <Helmet>
                <title>Gestión de archivos</title>
            </Helmet>
            <Navigation />
            <FilesManagementComponent />
        </section>
    )
}

export default FilesManagement