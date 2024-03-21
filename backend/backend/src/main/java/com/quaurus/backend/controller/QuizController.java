package com.quaurus.backend.controller;

import com.quaurus.backend.model.DummyScore;
import com.quaurus.backend.model.EQuiz;
import com.quaurus.backend.model.Quiz;
import com.quaurus.backend.service.QuizServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    
    @Autowired
    private QuizServiceImp quizService;

    @GetMapping("/range")
    public List<Quiz> getQuestionsByRange(@RequestParam int startId, @RequestParam int endId) { 
        return quizService.getQuestionsByRange(startId, endId); 
    }
    
    @GetMapping("/englishrange")
    public List<EQuiz> getEnglishQuestionsByRange(@RequestParam int startId, @RequestParam int endId) { 
        return quizService.getEQuestionsByRange(startId, endId); 
    }
    
    @PostMapping("/updateAdditionScore")
    public ResponseEntity<DummyScore> updateAdditionScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateAdditionScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/updateSubtractionScore")
    public ResponseEntity<DummyScore> updateSubtractionScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateSubtractionScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updateMultiplicationScore")
    public ResponseEntity<DummyScore> updateMultiplicationScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateMultiplicationScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updateDivisionScore")
    public ResponseEntity<DummyScore> updateDivisionScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateDivisionScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updatePercentageScore")
    public ResponseEntity<DummyScore> updatePercentageScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updatePercentageScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/updateFullstopScore")
    public ResponseEntity<DummyScore> updateFullstopScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateFullstopScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updateQuestionmarkScore")
    public ResponseEntity<DummyScore> updateQuestionmarkScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateQuestionMarkScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updateExclamationScore")
    public ResponseEntity<DummyScore> updateExclamationScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateExclamationScore(userId, newScore);
        if (updatedScore != null) {
            return ResponseEntity.ok(updatedScore);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/updateCommaScore")
    public ResponseEntity<DummyScore> updateCommaScore(@RequestParam Long userId, @RequestParam Integer newScore) {
        DummyScore updatedScore = quizService.updateCommaScore(userId, newScore);
        return updatedScore != null ? ResponseEntity.ok(updatedScore) : ResponseEntity.notFound().build();
    }

}
