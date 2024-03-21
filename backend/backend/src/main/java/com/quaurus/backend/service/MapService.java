package com.quaurus.backend.service;

import com.quaurus.backend.model.MapSearchHistory;
import com.quaurus.backend.repository.MapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MapService {

    private final MapRepository mapRepository;

    @Autowired
    public MapService(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public MapSearchHistory saveSearchHistory(MapSearchHistory searchHistory) {
        return mapRepository.save(searchHistory);
    }
}
