export function ButtonsTrack({ deleteTrack, audioUrl }) {
    return (
        <div className="buttons-track">
            <button onClick={() => deleteTrack(audioUrl)}>Excluir</button>
        </div>
    );
}