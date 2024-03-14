import {User} from "@nextui-org/react";
import Moment from 'moment';
import  { extendMoment } from 'moment-range';
import { FaSquare } from "react-icons/fa";

const ReadOnly = (props) => {
    
    const formatDate = (start, end) => {
        const moment = extendMoment(Moment);
        const startDate = moment(start);
        const endDate = moment(end);
        const range = moment.range(startDate, endDate);
    
        // Mostrar solo el nombre del día de la semana y la hora de inicio y finalización
        return `${startDate.format('dddd h:mma')} - ${endDate.format('h:mma')}`;
    }
    

    const truncateTitle = (title, length) => {
        return title.length > length ? title.substring(0, length) + "..." : title;
    }

    return (
        <>
            <section className='flex flex-col gap-6'>
                <header className="flex gap-6">
                    <div className="pt-2">
                        <FaSquare className='text-blue-600'/>
                    </div>
                    <div>
                        <h1 className="text-lg font-medium text-gray-600">
                            {truncateTitle(`${props.subject} - ${props.teacher} `, 80)}
                        </h1>
                        <span className="flex text-gray-500 text-sm">
                            {formatDate(props.start, props.end)}
                        </span>
                    </div>
                    <User   
                        name={props.teacher}
                        description={`Docente de ${props.subject}`}
                        avatarProps={{
                            src: ''
                        }}
                    />
                </header>
            </section>
        </>
    )
}

export default ReadOnly