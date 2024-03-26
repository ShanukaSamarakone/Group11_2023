package com.quaurus.backend.service;

import com.quaurus.backend.model.DummyScore;
import com.quaurus.backend.model.EQuiz;
import com.quaurus.backend.model.Quiz;
import com.quaurus.backend.repository.DummyScoreRepository;
import com.quaurus.backend.repository.EQuizRepository;
import com.quaurus.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImp {
    
    @Autowired
    private QuizRepository quizRepository;
    
    @Autowired
    private EQuizRepository EquizRepository;

    @Autowired
    private DummyScoreRepository dummyScoreRepository; 
    

    public List<Quiz> getQuestionsByRange(int startId, int endId) { 
        return quizRepository.findByIdBetween(startId, endId);
    }
    
    public List<EQuiz> getEQuestionsByRange(int startId, int endId) { 
        return EquizRepository.findByIdBetween(startId, endId);
    }
    
    public DummyScore updateAdditionScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setAdditionScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }
    
    public DummyScore updateSubtractionScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setSubtractionScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updateMultiplicationScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setMultiplicationScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updateDivisionScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setDivisionScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updatePercentageScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setPercentageScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }
    
    public DummyScore updateFullstopScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setFullstopScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updateQuestionMarkScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setQuestionmarkScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updateExclamationScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setExclamationScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

    public DummyScore updateCommaScore(Long userId, Integer newScore) {
        DummyScore score = dummyScoreRepository.findByUserId(userId);
        if (score != null) {
            score.setCommaScore(newScore);
            dummyScoreRepository.save(score);
        }
        return score;
    }

}
