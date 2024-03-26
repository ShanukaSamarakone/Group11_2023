package com.quaurus.backend.repository;

import com.quaurus.backend.model.CV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CVRepository extends JpaRepository<CV, Integer>{
}
