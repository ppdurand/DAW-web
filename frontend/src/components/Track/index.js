import { ButtonsTrack } from "../ButtonsTrack";

export function Track({audioUrls, deleteTrack}) {
    return (
        <>
            {audioUrls.map((url, index) => (
                <div className="track" key={index}>
                    <ButtonsTrack deleteTrack={deleteTrack} audioUrl={url}/>
                    <div className="wave-track" id={`waveform-${index}`} />
                </div>
            ))}
        </>
    )
}