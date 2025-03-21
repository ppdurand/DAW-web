import { useEffect, useState } from "react";
import "./style.css";
import WaveSurfer from "wavesurfer.js"

export function TrackList({ audioUrls }) {
    const [currentIndex, setCurrentIndex] = useState()

    useEffect(() => {
        setCurrentIndex(audioUrls.length)
        audioUrls.forEach(audio => {
            if (audioUrls[currentIndex] == audio) {
                const waveSurfer = WaveSurfer.create({
                    container: `#waveform-${currentIndex}`,
                    waveColor: 'green',
                    progressColor: 'darkgreen',
                    barWidth: 2,
                    height: 80
                })

                waveSurfer.load(audio)
                console.log(waveSurfer)

                return () => waveSurfer.destroy()
            }
            return null;
        })
    }, [audioUrls])
    return (
        <div className="records-list">
            {audioUrls.length > 0 && (
                <>
                    <h2>Reproduzir gravação</h2>
                    {audioUrls.map((url, index) => (
                        <>
                            <audio controls src={url} />
                            <div key={index} id={`waveform-${index}`} />
                        </>
                    ))}
                </>
            )}
        </div>
    );
}
