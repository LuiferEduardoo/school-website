import weekDays from './weekDays';
import formats from './formats';
import localizer from './localizer';

const EventComponent = ({ event }) => (
    <span>{event.subject} - {event.teacher}</span>
);

const Components = () => {
    return (
        {
            week: {
                header: ({ date }) => weekDays.includes(date.getDay()) ? formats.dayFormat(date, 'es', localizer) : null,
            },
            event: EventComponent
        }
    )
}

export default Components