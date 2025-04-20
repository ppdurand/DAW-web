package edu.ThunderSound.domain.model;

public class Clip {
    private long id;
    private String start;
    private String end;
    private Integer volume;
    private String fileName;
    

    public Clip() {
    }

    public Clip(long id, String start, String end, Integer volume, String fileName) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.volume = volume;
        this.fileName = fileName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
