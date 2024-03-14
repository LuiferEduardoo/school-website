import ScheduleComponent from "../../../components/Schedule"
import { Helmet } from "react-helmet";

const Schedule = () => {
    return (
        <>
            <Helmet>
                <title>Horario</title>
            </Helmet>
            <ScheduleComponent/>
        </>
    )
}

export default Schedule