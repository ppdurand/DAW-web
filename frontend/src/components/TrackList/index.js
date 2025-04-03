import { useEffect, useState } from "react";
import "./style.css";
import WaveSurfer from "wavesurfer.js"

export function TrackList({ audioUrls, setAudioUrls, waveSurfers, setWaveSurfers }) {
    const [currentIndex, setCurrentIndex] = useState()

    useEffect(() => {
        setCurrentIndex(audioUrls.length);
        audioUrls.forEach((audio, index) => {
            if (audioUrls[currentIndex] === audio) {
                const waveSurfer = WaveSurfer.create({
                    container: `#waveform-${currentIndex}`,
                    waveColor: '#808000',
                    progressColor: '#FFFF00',
                    barWidth: 2,
                    height: 80
                });

                waveSurfer.audioUrl = audio;

                waveSurfer.on('ready', () => {
                    const duration = waveSurfer.getDuration();
                    const trackElement = document.getElementById(`waveform-${index}`);
                    if (trackElement) {
                        trackElement.style.width = `${duration * 100}px`;
                    }
                });

                setWaveSurfers([...waveSurfers, waveSurfer])
                waveSurfer.load(audio)

                return () => waveSurfer.destroy()
            }
            return null;
        });
    }, [audioUrls, waveSurfers])

    function deleteTrack(url){
        setWaveSurfers(prevWaveSurfers => prevWaveSurfers.filter(ws => ws.audioUrl !== url));
        setAudioUrls(prevAudioUrls => prevAudioUrls.filter(a => a !== url))
    }

    return (
        <div className="records-list" style={{ display: "flex", overflowX: "auto" }}>
            {audioUrls.length > 0 && (
                <>
                    <h2 className="title">Reproduzir gravação</h2>
                    {audioUrls.map((url, index) => (
                        <div className="track" key={index} style={{display: "inline-block", marginRight: "10px"}}>
                            <button onClick={() => deleteTrack(url)}>Excluir</button>
                            <div className="wave-track" id={`waveform-${index}`} />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
