package edu.ThunderSound.application.dto;

import edu.ThunderSound.domain.model.Track;
import java.util.List;

public class ProjectDTO {
    public record CreateProjectDTO(String name, List<Track> tracks) {
    }
}
