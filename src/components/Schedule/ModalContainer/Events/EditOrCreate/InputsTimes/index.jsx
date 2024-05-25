import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { es } from 'date-fns/locale';
import moment from 'moment';
import {Skeleton} from "@nextui-org/react";

const InputsTimes = (props) => {
    const minTime = moment('2024-04-17T06:00');
    const maxTime = moment('2024-04-17T22:00');
    return (
        props.isLoading ? (
            <div className="flex flex-col gap-4 w-full">
                <Skeleton className="h-14 w-full"/>
                <Skeleton className="h-14 w-full"/>
            </div>
        ) : (
            <>
                <LocalizationProvider dateAdapter={AdapterMoment} locale={es} className="flex flex-col w-full">
                    <div className="mb-4">
                        <TimePicker 
                            label="Inicio *"
                            value={moment(props.startTime)}
                            onChange={(newValue) => props.setStartTime(newValue)}
                            minTime={minTime} 
                            maxTime={maxTime}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <TimePicker 
                            label="Finalización *" 
                            value={moment(props.endTime)}
                            onChange={(newValue) => props.setEndTime(newValue)}
                            minTime={minTime} 
                            maxTime={maxTime}
                            className="w-full"
                        />
                    </div>
                </LocalizationProvider>
            </>
        )
    )
}

export default InputsTimes;