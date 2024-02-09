import React from "react";
import {Pagination} from "@nextui-org/react";

const PaginationComponent = () => {
    return (
        <div className='flex justify-end mt-auto'>
            <Pagination showControls total={10} initialPage={1} />
        </div>
    );
}

export default PaginationComponent