import { useState } from "react";

export function Recorder() {
    const [frequency, setFrequency] = useState()

    function handleButtonClick(){
        if (!frequency) return;

        const context = new (window.AudioContext || window.webkitAudioContext)();
        const osc = context.createOscillator()
        osc.connect(context.destination)

        osc.frequency.value = Number(frequency)

        osc.start()
        osc.stop(context.currentTime + 1)

        return () => {
            osc.disconnect()
            context.close()
        }
    }

    return (
        <div>
            <h1>Digite a frequência</h1>
            <input type="number" value={frequency} onChange={e => setFrequency(e.target.value)} />
            <button onClick={handleButtonClick}>Tocar</button>
        </div>
    )
}