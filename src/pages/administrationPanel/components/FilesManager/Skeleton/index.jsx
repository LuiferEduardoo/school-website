import { Skeleton } from "@nextui-org/react";

const SkeletonContent = (props) => {
    return (
        <>
            <section className="grid grid-cols-1 gap-4">
                <Skeleton className="w-full h-10 p-8 rounded-lg" />
                <section className={`grid grid-cols-1 sm:grid-cols-3 gap-4`}>
                {props.fileType === 'image' ? (
                    Array(10).fill().map((_, index) => (
                        <Skeleton key={index} className="w-30 h-40 rounded-lg" />
                    ))
                ) : (
                    <Skeleton className="w-full h-full rounded-lg" />
                )}
                </section>
            </section>
        </>
    )
} 

export default SkeletonContent