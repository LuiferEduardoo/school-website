import FormPublications from "../../../components/Form/Publications";
import { Helmet } from "react-helmet";

const Create = () => {
    return (
        <>
            <Helmet>
                <title>Crear publicación - Proyecto Institucional</title>
            </Helmet>
            <FormPublications />
        </>
    );
}

export default Create