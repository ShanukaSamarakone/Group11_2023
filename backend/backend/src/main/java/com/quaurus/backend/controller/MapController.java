package com.quaurus.backend.controller;

import com.quaurus.backend.model.MapRequest;
import com.quaurus.backend.model.MapSearchHistory;
import com.quaurus.backend.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MapController {

    @Autowired
    private MapService mapService;

    @PostMapping("/addLocation")
    public MapSearchHistory postLocation(@RequestBody MapRequest request) {
        // Here you can access the location from the request object and store it in the database
        String location = request.getQuery().getLocation();
        MapSearchHistory searchHistory = new MapSearchHistory();
        searchHistory.setLocation(location);
        // Save the search history in the database using your MapService
        return mapService.saveSearchHistory(searchHistory);

    }
}
