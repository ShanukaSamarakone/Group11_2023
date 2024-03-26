package com.quaurus.backend.repository;

import com.quaurus.backend.model.ProgressTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgressTrackerRepository extends JpaRepository<ProgressTracker, Long> {
}
