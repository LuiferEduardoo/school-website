import {Skeleton} from "@nextui-org/react";
import { FaSquare } from "react-icons/fa";

const Header = (props) => {
  const truncateTitle = (title, length) => {
    return title.length > length ? title.substring(0, length) + "..." : title;
  }
  return (
    <header className="flex gap-6">
      <div className="pt-2">
        {props.isLoading ? (
            <Skeleton className="h-3.5 w-4" />
        ) : (
            <FaSquare className="text-blue-600" />
        )}
      </div>
      <div className="w-full flex flex-col">
        {props.isLoading ? (
            <>
                <Skeleton className="h-4 w-3/5 rounded-lg"/>
                <Skeleton className="h-3 w-4/5 rounded-lg mt-2"/>
            </>
        ) : (
            <>
                <h1 className="text-lg font-medium text-gray-600">
                    {truncateTitle(`${props.schedule.subject.subjectName.name}`, 80)}
                </h1>
                <span className="flex text-gray-500 text-sm">
                {`${props.schedule.dayWeek.dayweek} de ${props.schedule.startTime} a ${props.schedule.endTime}`}
                </span>
            </>
        )}
      </div>
    </header>
  );
};

export default Header
