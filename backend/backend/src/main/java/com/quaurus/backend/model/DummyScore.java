package com.quaurus.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "dummy_score")
@NoArgsConstructor
@AllArgsConstructor @Getter @Setter
public class DummyScore {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_username")
    private String userUsername;

    @Column(name = "addition_score")
    private Integer additionScore;

    @Column(name = "subtraction_score")
    private Integer subtractionScore;

    @Column(name = "multiplication_score")
    private Integer multiplicationScore;

    @Column(name = "division_score")
    private Integer divisionScore;

    @Column(name = "percentage_score")
    private Integer percentageScore;

    @Column(name = "fullstop_score")
    private Integer fullstopScore;

    @Column(name = "comma_score")
    private Integer commaScore;

    @Column(name = "questionmark_score")
    private Integer questionmarkScore;

    @Column(name = "exclamation_score")
    private Integer exclamationScore;

}
