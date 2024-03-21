package com.quaurus.backend.repository;

import com.quaurus.backend.model.DummyScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DummyScoreRepository extends JpaRepository<DummyScore, Long> {
    DummyScore findByUserId(Long userId); 
}
