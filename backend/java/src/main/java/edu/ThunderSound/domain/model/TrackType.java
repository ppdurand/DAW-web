package edu.ThunderSound.domain.model;

public enum TrackType {
    AUDIO("Audio");

    private String type;

    TrackType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
