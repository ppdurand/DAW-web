package edu.ThunderSound.application.dto;

import edu.ThunderSound.domain.model.Track;

public record CreateProjectDTO(String name, Track[] tracks) {

}
