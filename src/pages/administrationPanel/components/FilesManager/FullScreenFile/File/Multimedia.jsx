import React from 'react'
import ReactPlayer from 'react-player'


const Multimedia = (props) => {
    return(
        <>
            <ReactPlayer url={props.url} />
        </>

    )
}

export default Multimedia