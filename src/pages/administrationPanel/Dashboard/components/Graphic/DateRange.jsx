import { DateRangePicker } from "@tremor/react";
import { es } from "date-fns/locale";

const DateRange = ({value, setValue}) => {
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