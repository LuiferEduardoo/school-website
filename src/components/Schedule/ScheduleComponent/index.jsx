import React, { useState, useEffect, useContext } from 'react';
import { ScheduleContext } from "..";
import { AuthContext } from '../../../providers/AuthContext';
import { getSchedule } from '../../../services/schedule.service';
import dayWeekArray from '../ModalContainer/Events/EditOrCreate/WeekDay/dayWeek';
import {Skeleton} from "@nextui-org/react";
import { Calendar, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; // Importa el locale español
import localizer from './localizer';
import formats from './formats';
import { morning, afternoon, evening, flexible } from './timeRange'

moment.locale('es'); // Configura moment para usar el locale español

const ScheduleComponent = (props) => {
  const {isReadOnly, course, setSelect, setIdScheduleSelect, setClickButton, onOpen, withoutToken, updatePageSchedule, setUpdatePageSchedule} = useContext(ScheduleContext);
  const authContext = useContext(AuthContext);
  const {
    accessToken = null,
    setAccessToken = null,
    refreshToken = null,
    setRefreshToken = null
  } = authContext || {};
  const [events, setEvents] = useState([]);
  const [timeRange, setTimeRange] = useState(flexible);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callToAPI = async () => {
      const courseId = [...course][0];
      if(courseId){
        try{
          setIsLoading(true)
          const response = await getSchedule(accessToken, setAccessToken, refreshToken, setRefreshToken, courseId, null, withoutToken);
          const eventsFormat = response.map(({id, startTime, endTime, dayWeek, subject}) => {
            const day = dayWeekArray.filter(({name}) => name === dayWeek.dayweek);
            return {
              id,
              title: `${subject.subjectName.name} - ${subject.teacher.name} ${subject.teacher.lastName}`,
              start: moment(`2024-01-0${day[0].key}T${startTime}`).toDate(),
              end: moment(`2024-01-0${day[0].key}T${endTime}`).toDate()
            }
          });
          const educationDay = response?.[0]?.schoolCourses?.schoolGrade?.academic?.educationDay?.educationDay;

          let timeRange;
          switch (educationDay) {
            case 'Mañana':
              timeRange = morning;
              break;
            case 'Tarde':
              timeRange = afternoon;
              break;
            case 'Noche':
              timeRange = evening;
              break;
            default:
              timeRange = flexible;
              break;
          }

          setTimeRange(timeRange);
          setEvents(eventsFormat);
        } finally{
          setUpdatePageSchedule(false);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setEvents([]);
      }
    }
    callToAPI();
  }, [updatePageSchedule, course])

  const handleSelectSlot = slotInfo => {
    if(!isReadOnly){
      const dayOfWeek = moment(slotInfo.start).isoWeekday();
      const dayWeek = dayWeekArray.filter(dayWeek => dayWeek.key === dayOfWeek);
      if (dayOfWeek <= 6 && [...course][0]) { // Si es domingo (7), no hacer nada
        setSelect({...slotInfo, dayWeek: dayWeek[0].name.toString()});
        setClickButton('event');
        setIdScheduleSelect()
        onOpen();
      }
    }
  };

  const handleEventSelect = slotInfo => {
    setClickButton('event');
    setIdScheduleSelect(slotInfo.id);
    onOpen();
};
  return (
    isLoading ? (
      <Skeleton className="w-full h-[657px] rounded-lg" />
    ) : (
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleEventSelect}
          views={[Views.WEEK]}
          defaultView={Views.WEEK}
          defaultDate={new Date(2024, 0, 6)} // Configura el calendario para que siempre muestre la misma semana
          formats={formats}
          toolbar={false}
          // Utiliza los días de la semana definidos anteriormente
          culture='es'
          min={new Date(2024, 0, 6, timeRange.start)} // Configura la hora mínima que se mostrará
          max={new Date(2024, 0, 6, timeRange.end)} // Configura la hora máxima que se mostrará
        />
      </div>
    )
  );
};

export default ScheduleComponent;