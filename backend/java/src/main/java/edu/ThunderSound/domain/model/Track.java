package edu.ThunderSound.domain.model;

public class Track {
    private long id;
    private String name;
    private TrackType type;
    private Clip[] clips;

    public Track() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TrackType getType() {
        return type;
    }

    public void setType(TrackType type) {
        this.type = type;
    }

    public Clip[] getClips() {
        return clips;
    }

    public void setClips(Clip[] clips) {
        this.clips = clips;
    }
}
