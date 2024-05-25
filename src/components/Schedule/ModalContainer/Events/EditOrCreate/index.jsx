import React, { useState, useEffect, useContext } from "react";
import { ScheduleContext } from "../../..";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getSchedule } from "../../../../../services/schedule.service";
import Subjects from "./Subjects"
import WeekDay from "./WeekDay";
import InputsTimes from "./InputsTimes";
import Error from "./Error";
import Footer from "./Footer"
import moment from 'moment';

const EditOrCreate = (props) => {
    const {select, idScheduleSelect, academicLevel, course, onClose} = useContext(ScheduleContext);
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext)
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [schedule, setSchedule] = useState({});
    const [subject, setSubject] = useState(new Set());
    const [dayWeek, setDayWeek] = useState(new Set());
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [error, setError] = useState(false);

    const [isDifferent, setIsDifferent] = useState(true);

    useEffect(() => {
        const callToAPI = async () => {
            if(idScheduleSelect){
                try{
                    const dateToday = moment().format('YYYY-MM-DD');
                    setIsLoading(true)
                    const {subjectId, dayWeek, startTime, endTime} = await getSchedule(accessToken, setAccessToken, refreshToken, setRefreshToken, [...course][0], idScheduleSelect);
                    setSchedule({
                        subjectId,
                        dayWeek: dayWeek.dayweek,
                        startTime: `${dateToday}T${startTime}`,
                        endTime: `${dateToday}T${endTime}`
                    })
                    setSubject(new Set([String(subjectId)]));
                    setDayWeek(new Set([dayWeek.dayweek]));
                    setStartTime(`${dateToday}T${startTime}`);
                    setEndTime(`${dateToday}T${endTime}`);
                } catch(error){
                    onClose()
                }finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        }
        callToAPI()
    }, [idScheduleSelect]);

    useEffect(() => {
        const { subject: selectedSubject, dayWeek: selectedDayWeek, start: selectedStartTime, end: selectedEndTime } = select;
        setSubject(new Set(selectedSubject) || new Set());
        setDayWeek(new Set([selectedDayWeek]) || new Set());
        setStartTime(moment(selectedStartTime).format('YYYY-MM-DDTHH:mm'));
        setEndTime(moment(selectedEndTime).format('YYYY-MM-DDTHH:mm'));
        setError(false);
    }, [select]);

    useEffect(() => {
        if (moment(startTime).isAfter(moment(endTime))) {
            setError(true);
        } else {
            setError(false);
        }
    }, [startTime, endTime]);

    useEffect(() => {
        const isEmpty = subject.size === 0 || dayWeek.size === 0 || !startTime || !endTime || error;
        const isValid =  idScheduleSelect ? !isDifferent : isEmpty ;
        setIsDisabled(isValid);
    }, [subject, dayWeek, startTime, endTime, error, isDifferent]);
    

    return (
        <form className='flex flex-col gap-4'>
            <Subjects
                isLoading={isLoading}
                academicLevel={academicLevel}
                subject={subject}
                setSubject={setSubject}
            />
            <WeekDay
                isLoading={isLoading}
                dayWeek={dayWeek}
                setDayWeek={setDayWeek}
            />
            <InputsTimes
                isLoading={isLoading}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
            />
            <Error
                error={error}
            />
            <Footer 
                id={idScheduleSelect}
                subject={subject}
                dayWeek={dayWeek}
                startTime={startTime}
                endTime={endTime}
                isDisabled={isDisabled}
                onClose={onClose}
                setIsDifferent={setIsDifferent}
                schedule={schedule}
            />
        </form>
    )
}

export default EditOrCreate