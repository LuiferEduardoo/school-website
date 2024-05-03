import { Skeleton } from "@nextui-org/react";

const SkeletonContent = (props) => {
    return (
        <>
            {props.create && (
                <div className="flex justify-end">
                    <Skeleton className="w-[80px] h-[40px] rounded-lg mb-10" />
                </div>
            )}
            <Skeleton className="w-full h-10 p-10 rounded-sm mb-5" />
            <Skeleton className="w-full h-full  rounded-sm" />
        </>
    )
} 

export default SkeletonContent