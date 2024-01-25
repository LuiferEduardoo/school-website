import { DateRangePicker } from "@tremor/react";
import { es } from "date-fns/locale";
import { useState } from "react";

const DateRange = () => {
    const [value, setValue] = useState({
        from: new Date(new Date().getFullYear(), 1, 1),
        to: new Date(),
    });
    
    return (
        <div className="mb-9">
            <DateRangePicker
                value={value}
                onValueChange={setValue}
                locale={es}
            />
        </div>
    );
}

export default DateRange