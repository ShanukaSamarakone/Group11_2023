package com.quaurus.backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "map_db")
public class MapSearchHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "search_id")
    private Long id;

    @Column(name = "location")
    private String location;

    // Constructors
    public MapSearchHistory() {
    }

    public MapSearchHistory(String location) {
        this.location = location;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
