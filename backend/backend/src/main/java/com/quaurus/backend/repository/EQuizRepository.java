package com.quaurus.backend.repository;

import com.quaurus.backend.model.EQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EQuizRepository extends JpaRepository<EQuiz, Long> {
    List<EQuiz> findByIdBetween(int startId, int endId); 
}
