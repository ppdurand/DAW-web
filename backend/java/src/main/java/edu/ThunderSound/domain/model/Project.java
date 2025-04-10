package edu.ThunderSound.domain.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.util.List;

public class Project {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private List<Track> tracks;

    public Project(){}

    public Project(String name, List<Track> tracks){
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

    public List<Track> getTracks() {
        return tracks;
    }

    public void setTracks(List<Track> tracks) {
        this.tracks = tracks;
    }
}
