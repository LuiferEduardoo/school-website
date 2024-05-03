import InstitutionalProjects from "../../../components/Form/InstitutionalProjects";
import { Helmet } from "react-helmet";

const Create = () => {
    return (
        <>
            <Helmet>
                <title>Crear proyecto institucional</title>
            </Helmet>
            <InstitutionalProjects />
        </>
    );
}

export default Create