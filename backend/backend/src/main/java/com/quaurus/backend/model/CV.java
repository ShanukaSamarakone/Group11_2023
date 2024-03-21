package com.quaurus.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="CV_DB")
@NoArgsConstructor
@AllArgsConstructor

public class CV {

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="Name")
    private String name;

    @Column(name="DOB")
    private String dob;

    @Column(name="Address")
    private String address;

    @Column(name="Skills")
    private String skills;

    @Column(name="Experience")
    private String experience;
}
