package com.quaurus.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "dummy_score")
@Data
@NoArgsConstructor
@AllArgsConstructor @Getter @Setter
public class ProgressTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_username")
    private String userUsername;

    @Column(name = "addition_score")
    private int additionScore;

    @Column(name = "subtraction_score")
    private int subtractionScore;

    @Column(name = "multiplication_score")
    private int multiplicationScore;

    @Column(name = "division_score")
    private int divisionScore;

    @Column(name = "percentage_score")
    private int percentageScore;

    @Column(name = "fullstop_score")
    private int fullstopScore;

    @Column(name = "comma_score")
    private int commaScore;

    @Column(name = "questionmark_score")
    private int questionmarkScore;

    @Column(name = "exclamation_score")
    private int exclamationScore;
}
