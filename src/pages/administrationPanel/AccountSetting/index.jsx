import { Helmet } from "react-helmet";
import Header from "./Header";
import Form from "./Form";

const AccountSetting = () => {
    return (
        <>
            <Helmet>
                <title>Configuración de la cuenta</title>
            </Helmet>
            <Header />
            <Form/>
        </>
    )
}

export default AccountSetting