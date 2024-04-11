import React, {useContext} from "react";
import {Pagination} from "@nextui-org/react";
import { ViewContext } from "..";

const PaginationComponent = () => {
    const {totalPage, offset, setOffset} = useContext(ViewContext);

    return (
        <div className='flex justify-end mt-auto'>
            {totalPage && totalPage > 0 && (
                <Pagination 
                    showControls 
                    total={totalPage} 
                    page={offset} 
                    onChange={setOffset}
                />
            )
            }
        </div>
    );
}

export default PaginationComponent