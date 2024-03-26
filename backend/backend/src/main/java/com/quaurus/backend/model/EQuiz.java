package com.quaurus.backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "english_questions")
@NoArgsConstructor
@AllArgsConstructor @Getter @Setter
public class EQuiz {

    @Id
    @Column(name = "question_id")
    @GeneratedValue
    private int id;

    @Column(name = "question_text")
    private String questionText;

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(name = "operation_type")
    private String operationType;
}

