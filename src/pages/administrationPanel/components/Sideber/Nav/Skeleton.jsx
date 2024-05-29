import { Skeleton } from "@nextui-org/skeleton";

const SkeletonComponent = () => {
    return (
        <div className="flex flex-col gap-10">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
        </div>
    );
};

export default SkeletonComponent;
