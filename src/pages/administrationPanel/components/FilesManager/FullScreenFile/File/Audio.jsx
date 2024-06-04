import ReactAudioPlayer from 'react-audio-player';

const Audio = (props) => {
    return (
        <>
            <ReactAudioPlayer src={props.url} autoPlay controls />
        </>
    )
}

export default Audio