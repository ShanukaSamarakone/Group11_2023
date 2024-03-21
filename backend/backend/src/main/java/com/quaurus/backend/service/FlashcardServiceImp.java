package com.quaurus.backend.service;


import com.quaurus.backend.model.Flashcard;
import com.quaurus.backend.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlashcardServiceImp{

    @Autowired
    private FlashcardRepository flashcardRepository;

    public Flashcard getFlashcardId(int id)
    {
        return flashcardRepository.findById(id).orElse(null);
    }


}
