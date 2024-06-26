import { Helmet } from "react-helmet";
import ScheduleContent from "./ScheduleContent";
import Information from "./Information";

const SchedulePage = () => {
    return (
        <main>
            <Helmet>
                <title>Horario</title>
                <meta name="description" content="Consulta el horario académico de la IE María Inmaculada. Encuentra las horas de clase, actividades extracurriculares y eventos importantes programados para nuestros estudiantes." />
            </Helmet>
            <Information />
            <ScheduleContent />
        </main>
    )
}

export default SchedulePage