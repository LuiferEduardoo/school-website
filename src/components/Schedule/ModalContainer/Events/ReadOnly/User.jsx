import { User } from "@nextui-org/react";
import {Skeleton} from "@nextui-org/react";

const UserComponent = (props) => {
  return props.isLoading ? (
    <div className="max-w-[300px] w-full flex items-center gap-3 mb-10">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  ) : (
    <div className="flex items-start justify-start mb-10">
      <User
        name={`${props.schedule.subject.teacher.name} ${props.schedule.subject.teacher.lastName}`}
        description={`Docente de ${props.schedule.subject.subjectName.name}`}
        avatarProps={{
          src: props.schedule.subject.teacher.image[0]?.image?.file?.url,
        }}
      />
    </div>
  );
};

export default UserComponent;