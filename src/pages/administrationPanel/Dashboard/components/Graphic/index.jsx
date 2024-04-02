import { useState } from "react";
import Visualizations from './Visualizations'
import AdmissionRequest from "./AdmissionRequest";
import DateRange from './DateRange'

const Graphid = () => {
    const [dateRange, setDateRange] = useState({
        from: new Date(new Date().getFullYear(), 1, 1),
        to: new Date(),
    });
    return (
        <>
            <DateRange 
                value={dateRange}
                setValue={setDateRange}
            />
            <Visualizations />
            <AdmissionRequest 
                dateRange={dateRange}
                setDateRange={setDateRange}
            />
        </>
    );
};


export default Graphid