import { Select, SelectItem } from "@nextui-org/react";
import dayWeek from "./dayWeek";

const WeekDay = (props) => {
    return (
        <>
            <Select
                isLoading={props.isLoading}
                isRequired
                items={dayWeek}
                label="Día de la semana"
                variant="bordered"
                selectedKeys={props.dayWeek}
                className="w-full"
                onSelectionChange={props.setDayWeek}
            >
            {(dayWeek) => (
                <SelectItem key={dayWeek.name} textValue={dayWeek.name}> {dayWeek.name}</SelectItem>
            )}
            </Select>
        </>
    )
}

export default WeekDay