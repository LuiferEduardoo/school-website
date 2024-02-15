import {Academic} from "./../components/Form"
import { Helmet } from "react-helmet";

const Edit = () => {
    return (
        <>
            <Helmet>
                <title>Editar nivel academico</title>
            </Helmet>
            <Academic edit={true}/>         
        </>
    )
}

export default Edit