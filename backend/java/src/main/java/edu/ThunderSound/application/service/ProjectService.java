package edu.ThunderSound.application.service;

import edu.ThunderSound.application.dto.ProjectDTO.CreateProjectDTO;
import edu.ThunderSound.domain.model.Project;
import edu.ThunderSound.infra.repository.ProjectRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository){
        this.repository = repository;
    }
    public ResponseEntity createProject(CreateProjectDTO request){
        Project entityToSave = new Project(request.name(), request.tracks());

        repository.save(entityToSave);
        return ResponseEntity.ok(entityToSave);
    }
}
