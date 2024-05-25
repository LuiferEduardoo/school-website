import { useState, useEffect, useContext } from "react";
import { ScheduleContext } from "../../..";
import { getSchedule } from "../../../../../services/schedule.service";
import Header from "./Header";
import UserComponent from "./User";

const ReadOnly = (props) => {
    const { idScheduleSelect, course, onClose } = useContext(ScheduleContext);
    const [schedule, setSchedule] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const callToAPI = async() => {
            try{
                setSchedule(await getSchedule(null, null, null, null, [...course][0], idScheduleSelect, true));
            } catch(error){
                onClose();
            } finally{
                setIsLoading(false);
            }
        }
        callToAPI();
    }, [idScheduleSelect])

    return (
        <section className='flex flex-col gap-4 mt-2'>
            <Header 
                isLoading={isLoading} 
                schedule={schedule} 
            />
            <UserComponent 
                isLoading={isLoading} 
                schedule={schedule} 
            />
        </section>
    )
}

export default ReadOnly