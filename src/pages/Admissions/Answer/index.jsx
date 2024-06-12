import { Helmet } from "react-helmet";
import Information from "./Information";
import Form from "./Form";

const Answer = () => {
    return (
        <main>
            <Helmet>
                <title>Admisiones - Estado solicitud</title>
                <meta name="description" content="Conoce el estado de tu solicitud de admision, y descubre si fusite admitido" />
            </Helmet>
            <section className="px-8 py-20 space-y-8">
                <Information />
                <Form />
            </section>
        </main>
    )
}

export default Answer