package com.quaurus.backend.controller;

import com.quaurus.backend.model.ProgressTracker;
import com.quaurus.backend.service.ProgressTrackerServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/progress-tracker")
@CrossOrigin("http://localhost:3000")
public class ProgressTrackerController {

    private final ProgressTrackerServiceImp progressTrackerService;

    @Autowired
    public ProgressTrackerController(ProgressTrackerServiceImp progressTrackerServiceImp) {
        this.progressTrackerService = progressTrackerServiceImp;
    }

    @GetMapping("/all-users")
    public List<ProgressTracker> getAllUserData() {
        return progressTrackerService.getAllUserData();
    }
}
