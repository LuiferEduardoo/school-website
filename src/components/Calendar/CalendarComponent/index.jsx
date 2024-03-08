import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es'; 
import events from './events';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
    const handleSlotSelected = slotInfo => {
        if(!props.isReadOnly){
            props.onOpen();
            props.setSelect(slotInfo);
        }
    };

    const handleEventSelect = slotInfo => {
        props.onOpen();
        props.setSelect({
            ...slotInfo,
            isReadOnly: props.isReadOnly
        });
    };
    return (
        <>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSlotSelected}
                onSelectEvent={handleEventSelect}
                messages={{
                    allDay: "Todo el día",
                    previous: <FaArrowLeft className='m-[2.5px]' />,
                    next: <FaArrowRight className='m-[2.5px]' />,
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                    agenda: "Agenda",
                    date: "Fecha",
                    time: "Hora",
                    event: "Evento",
                    noEventsInRange: "Sin eventos"
                  }}
            />  
        </>
    )
}

export default CalendarComponent