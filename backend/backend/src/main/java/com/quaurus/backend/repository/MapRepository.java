package com.quaurus.backend.repository;

import com.quaurus.backend.model.MapSearchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends JpaRepository<MapSearchHistory, Long> {
}
