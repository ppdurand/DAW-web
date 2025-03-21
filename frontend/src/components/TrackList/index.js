import "./style.css";

export function TrackList({ audioUrls }) {
    return (
        <div className="records-list">
            {audioUrls.length > 0 && (
                <>
                    <h2>Reproduzir gravação</h2>
                    {audioUrls.map((url, index) => (
                        <div key={index}>
                            <audio controls src={url} />
                            <a href={url} download={`gravacao_${index + 1}.wav`}>Baixar gravação</a>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
