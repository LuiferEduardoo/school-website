import Form from './../components/Form';
import { Helmet } from "react-helmet";

const Edit = () => {
    return (
        <>
            <Helmet>
                <title>Editar noticia</title>
            </Helmet>
            <Form edit={true}/>
        </>
    )
}

export default Edit