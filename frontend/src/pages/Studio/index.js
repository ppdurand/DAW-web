import { useState } from "react";
import { Recorder } from "../../components/Recorder";
import { TrackList } from "../../components/TrackList";

export function Studio() {
    const [audioUrls, setAudioUrls] = useState([]);
    return (
        <div className="studio-backgorund">
            <Recorder setAudioUrls={setAudioUrls} />
            <TrackList audioUrls={audioUrls}/>
        </div>
    )
}