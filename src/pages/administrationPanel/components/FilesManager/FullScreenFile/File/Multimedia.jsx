import React from 'react'
import ReactPlayer from 'react-player'


const Multimedia = (props) => {
    return(
        <>
            <ReactPlayer url={props.blob} />
        </>

    )
}

export default Multimedia