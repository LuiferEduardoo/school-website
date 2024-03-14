import React from 'react';
import { Calendar, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; // Importa el locale español
import localizer from './localizer';
import formats from './formats'
import Components from './Components';
import { morning, afternoon, evening } from './timeRange'

moment.locale('es'); // Configura moment para usar el locale español

const ScheduleComponent = (props) => {
  const events = props.events;
  const timeRange = morning;

  const handleSelectSlot = slotInfo => {
    if(!props.isReadOnly){
      const dayOfWeek = moment(slotInfo.start).isoWeekday();
      if (dayOfWeek <= 6 && props.academicLevel && props.grade && props.course) { // Si es domingo (7), no hacer nada
        props.setSelect({...slotInfo, dayWeek: dayOfWeek.toString()})
        props.setClickButton('event')
        props.onOpen();
      }
    }
  };

  const handleEventSelect = slotInfo => {
    const dayOfWeek = moment(slotInfo.start).isoWeekday();
    props.onOpen();
    props.setSelect({
        ...slotInfo,
        dayWeek: dayOfWeek.toString(),
        isReadOnly: props.isReadOnly
    });
};

  return (
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
        components={Components}
        min={new Date(2024, 0, 6, timeRange.start)} // Configura la hora mínima que se mostrará
        max={new Date(2024, 0, 6, timeRange.end)} // Configura la hora máxima que se mostrará
      />
    </div>
  );
};

export default ScheduleComponent;