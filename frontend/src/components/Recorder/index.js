import { useRef, useState } from "react";
import "./style.css"

export function Recorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrls, setAudioUrls] = useState([]);
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

    async function startRecording() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.current.push(event.data);
            }
        };

        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
            const url = URL.createObjectURL(audioBlob);
            setAudioUrls((prev) => [...prev, url]);
            audioChunks.current = [];
        };

        mediaRecorder.current.start()
        setIsRecording(true);
    }

    function stopRecording() {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    }

    return (
        <div>
            <h1>Gravação de áudio</h1>
            {isRecording && <button onClick={stopRecording}>Parar</button>}
            {!isRecording && <button onClick={startRecording}>Gravar</button>}

            {audioUrls.length > 0 &&
                <div className="records-list">
                    <h2>Reproduzir gravação</h2>
                    {audioUrls.map((url, index) => (
                        <>
                            <audio controls src={url} />
                            <a key={index} href={url} download={`gravacao_${index + 1}.wav`}>Baixar gravação</a>
                        </>
                    ))
                    }
                </div>
            }
        </div>
    )
}