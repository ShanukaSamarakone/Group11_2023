package com.quaurus.backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "math_questions")
@NoArgsConstructor
@AllArgsConstructor @Getter @Setter
public class Quiz {

    @Id
    @Column(name = "question_id")
    @GeneratedValue
    private int id;

    @Column(name = "question_text")
    private String questionText;

    @Column(name = "correct_answer")
    private int correctAnswer;

    @Column(name = "operation_type")
    private String operationType;
}

