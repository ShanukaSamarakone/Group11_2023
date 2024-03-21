package com.quaurus.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Table(name = "Flashcard_DB")
@NoArgsConstructor
@AllArgsConstructor
public class Flashcard {

    @Id
    @Column(name = "ID")
    @GeneratedValue
    private int id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Flashcard")
    private String flashcard;

}
