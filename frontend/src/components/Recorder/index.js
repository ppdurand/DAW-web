import { useRef, useState } from "react";

export function Recorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState("");
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
            setAudioUrl(url);
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

            {audioUrl &&
                <>
                    <h2>Reproduzir gravação</h2>
                    <audio controls src={audioUrl} />
                    <href src={audioUrl} download={"teste.wav"}>Baixar gravação</href>
                </>

            }
        </div>
    )
}