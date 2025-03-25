import { useEffect, useState } from "react";
import "./style.css";
import WaveSurfer from "wavesurfer.js"

export function TrackList({ audioUrls, waveSurfers, setWaveSurfers }) {
    const [currentIndex, setCurrentIndex] = useState()

    useEffect(() => {
        setCurrentIndex(audioUrls.length)
        audioUrls.forEach(audio => {
            if (audioUrls[currentIndex] == audio) {
                const waveSurfer = WaveSurfer.create({
                    container: `#waveform-${currentIndex}`,
                    waveColor: '#808000',
                    progressColor: '#FFFF00',
                    barWidth: 2,
                    height: 80
                })

                setWaveSurfers([...waveSurfers, waveSurfer])
                waveSurfer.load(audio)

                return () => waveSurfer.destroy()
            }
            return null;
        })
    }, [audioUrls]) 

    return (
            <div className="records-list">
                {audioUrls.length > 0 && (
                    <>
                        <h2 className="title">Reproduzir gravação</h2>
                        {audioUrls.map((url, index) => (
                            <div className="track">
                                <div className="wave-track" key={index} id={`waveform-${index}`} />
                            </div>
                        ))}
                    </>
                )}
            </div>
    );
}
