import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';

const InputsTimes = (props) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment} className="flex flex-col w-full">
                <div className="mb-4">
                    <TimePicker 
                        label="Inicio *"
                        value={moment(props.startTime)}
                        onChange={(newValue) => props.setStartTime(newValue)}
                        className="w-full"
                    />
                </div>
                <div>
                    <TimePicker 
                        label="Finalización *" 
                        value={moment(props.endTime)}
                        onChange={(newValue) => props.setEndTime(newValue)}
                        className="w-full"
                    />
                </div>
            </LocalizationProvider>
        </>
    )
}

export default InputsTimes
