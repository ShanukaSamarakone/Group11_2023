package com.quaurus.backend.repository;

import com.quaurus.backend.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByIdBetween(int startId, int endId); 
}

