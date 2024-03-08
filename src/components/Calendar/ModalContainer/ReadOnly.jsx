import {Textarea} from "@nextui-org/react";
import Moment from 'moment';
import  { extendMoment } from 'moment-range';
import { FaSquare } from "react-icons/fa";

const ReadOnly = (props) => {
    
    const formatDate = (start, end) => {
        const moment = extendMoment(Moment);
        const startDate = moment(start);
        const endDate = moment(end);
        const range = moment.range(startDate, endDate);
    
        if (range.diff('days') === 0) {
            // Si las fechas son iguales, solo muestra la hora de inicio y finalización
            return `${startDate.format('dddd, D MMMM')}⋅${startDate.format('h:mm a')} – ${endDate.format('h:mm a')}`;
        } else {
            // Si las fechas no son iguales, muestra la fecha de inicio y finalización
            return `${startDate.format('D')} – ${endDate.format('D MMMM YYYY')}`;
        }
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
                            {truncateTitle(props.title, 80)}
                        </h1>
                        <span className="flex text-gray-500 text-sm">
                            {formatDate(props.start, props.end)}
                        </span>
                    </div>
                </header>
                {props.description !== '' && (
                    <section>
                        <Textarea
                            isReadOnly
                            label="Descripción"
                            variant="bordered"
                            labelPlacement="outside"
                            defaultValue={props.description}
                        />
                    </section>
                )}
            </section>
        </>
    )
}

export default ReadOnly