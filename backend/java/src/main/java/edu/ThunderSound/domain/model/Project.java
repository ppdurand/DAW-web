package edu.ThunderSound.domain.model;


public class Project {
    private long id;
    private String name;
    private Track[] tracks;

    public Project(){}

    public Project(long id, String name, Track[] tracks) {
        this.id = id;
        this.name = name;
        this.tracks = tracks;
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

    public Track[] getTracks() {
        return tracks;
    }

    public void setTracks(Track[] tracks) {
        this.tracks = tracks;
    }
}
