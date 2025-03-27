import { useState } from "react";
import { Recorder } from "../../components/Recorder";
import { TrackList } from "../../components/TrackList";

export function Studio() {
    const [audioUrls, setAudioUrls] = useState([]);
    const [waveSurfers, setWaveSurfers] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlayPause(){
        waveSurfers.forEach(ws => ws.playPause())
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="studio-backgorund">
            <h1 className="title">Thunder Sound</h1>
            <div className="header-buttons">
                <Recorder setAudioUrls={setAudioUrls} />
                <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
            <TrackList audioUrls={audioUrls} setAudioUrls={setAudioUrls} waveSurfers={waveSurfers} setWaveSurfers={setWaveSurfers} />
        </div>
    )
}