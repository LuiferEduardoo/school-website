import { Helmet } from "react-helmet";
import Calendar from "../../../components/Calendar"

const CalendarComponent = () => {
    return (
        <main className="h-auto w-full space-y-8 px-8 py-10"> 
            <Helmet>
                <title>Calendario</title>
                <meta
                    name="description"
                    content="Consulta el calendario académico. Mantente informado sobre las fechas importantes, eventos, vacaciones y actividades escolares programadas para el año académico."
                />
            </Helmet>
            <section className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Calendario Escolar</h2>
                <span className="text-gray-500">
                    En esta página encontrarás el calendario escolar actualizado de nuestra institución, con todas las fechas importantes para el año académico. Aquí podrás consultar periodos de vacaciones, fechas de exámenes, eventos escolares y otras actividades relevantes. Mantente al tanto de todas las fechas clave para planificar el curso escolar de manera efectiva.
                </span>
            </section>
            <section className="h-[80rem]">
                <Calendar
                    withoutToken
                    isReadOnly
                />
            </section>
        </main>
    )
}

export default CalendarComponent