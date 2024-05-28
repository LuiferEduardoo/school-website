import { useContext, useState, useEffect } from 'react';
import { CalendarContext } from '..';
import { AuthContext } from '../../../providers/AuthContext';
import { getCalendar } from '../../../services/calendar.service';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es'; 
import {Skeleton} from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
    const {isReadOnly, onOpen, setSelectCalendar, isUpdatePageCalendar, setIsUpdatePageCalendar, setIdSelectEvent, withoutToken } = useContext(CalendarContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [calendar, setCalendar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async() => {
            try {
                setIsLoading(true);
                const response = await getCalendar(accessToken, setAccessToken, refreshToken, setRefreshToken, null, withoutToken);
                setCalendar(response.map(r => ({
                    id: r.id,
                    title: r.title,
                    start: moment(r.startDate).toDate(),
                    end: moment(r.endDate).toDate(),
                })));
            } finally {
                setIsLoading(false);
                setIsUpdatePageCalendar(false);
            }
        }
        callToAPI();
    }, [isUpdatePageCalendar])

    const handleSlotSelected = slotInfo => {
        if(!isReadOnly){
            setIdSelectEvent();
            onOpen();
            setSelectCalendar({start: slotInfo.start, end: slotInfo.end});
        }
    };

    const handleEventSelect = slotInfo => {
        onOpen();
        setIdSelectEvent(slotInfo.id)
    };
    return (
        isLoading ? (
            <Skeleton className="w-full h-[657px] rounded-lg" />
        ) : (
            <Calendar
                localizer={localizer}
                events={calendar}
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
        )
    )
}

export default CalendarComponent