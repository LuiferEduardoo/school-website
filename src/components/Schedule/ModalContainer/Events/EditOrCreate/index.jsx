import React, { useState, useEffect } from "react";
import Subjects from "./Subjects";
import WeekDay from "./WeekDay";
import InputsTimes from "./InputsTimes";
import Error from "./Error";
import moment from 'moment';

const EditOrCreate = (props) => {
    const [subject, setSubject] = useState('');
    const [dayWeek, setDayWeek] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const { subject: selectedSubject, dayWeek: selectedDayWeek, start: selectedStartTime, end: selectedEndTime } = props.select;
        setSubject(selectedSubject || '');
        setDayWeek(selectedDayWeek || '');
        setStartTime(moment(selectedStartTime).format('YYYY-MM-DDTHH:mm'));
        setEndTime(moment(selectedEndTime).format('YYYY-MM-DDTHH:mm'));
        setError(false);
    }, [props.select]);

    useEffect(() => {
        if (moment(startTime).isAfter(moment(endTime))) {
            setError(true);
        } else {
            setError(false);
        }
    }, [startTime, endTime]);

    useEffect(() => {
        const isValid =  subject.size !== 0 && subject !== '' && dayWeek.size !== 0 && dayWeek !== '' && startTime !== '' && endTime !== '' && !error;
        props.setIsDisabled(!isValid);
    }, [subject, dayWeek, startTime, endTime, error]);

    return (
        <form className='flex flex-col gap-4'>
            <Subjects
                academicLevel={props.academicLevel}
                subject={subject}
                setSubject={setSubject}
            />
            <WeekDay
                dayWeek={dayWeek}
                setDayWeek={setDayWeek}
            />
            <InputsTimes
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
            />
            <Error
                error={error}
            />
        </form>
    )
}

export default EditOrCreate