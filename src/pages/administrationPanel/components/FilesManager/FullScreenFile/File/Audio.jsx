import ReactAudioPlayer from 'react-audio-player';

const Audio = (props) => {
    return (
        <>
            <ReactAudioPlayer src={props.blob} autoPlay controls />
        </>
    )
}

export default Audio