package edu.ThunderSound.API.controller;

import edu.ThunderSound.application.dto.ProjectDTO.CreateProjectDTO;
import edu.ThunderSound.application.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/project")
public class ProjectController {
    private final ProjectService service;

    public ProjectController(ProjectService service){
        this.service = service;
    }
    @PostMapping("/new")
    public ResponseEntity postProject(@RequestBody CreateProjectDTO request){
        return service.createProject(request);
    }
}
