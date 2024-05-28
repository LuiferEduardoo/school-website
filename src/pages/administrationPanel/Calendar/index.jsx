import CalendarComponent from "../../../components/Calendar"
import { Helmet } from "react-helmet";

const Calendar = () =>  {
    return (
        <>
            <Helmet>
                <title>Calendario</title>
            </Helmet>
            <CalendarComponent />
        </>
    )
}

export default Calendar