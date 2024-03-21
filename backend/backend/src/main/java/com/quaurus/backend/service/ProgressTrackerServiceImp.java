package com.quaurus.backend.service;
import com.quaurus.backend.model.ProgressTracker;
import com.quaurus.backend.repository.ProgressTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgressTrackerServiceImp {
    private final ProgressTrackerRepository progressTrackerRepository;

    @Autowired
    public ProgressTrackerServiceImp(ProgressTrackerRepository progressTrackerRepository) {
        this.progressTrackerRepository = progressTrackerRepository;
    }

    public List<ProgressTracker> getAllUserData() {
        return progressTrackerRepository.findAll();
    }


}
