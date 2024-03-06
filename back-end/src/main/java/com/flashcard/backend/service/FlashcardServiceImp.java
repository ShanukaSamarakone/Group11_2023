package com.flashcard.backend.service;


import com.flashcard.backend.model.Flashcard;
import com.flashcard.backend.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardServiceImp{

    @Autowired
    private FlashcardRepository flashcardRepository;

    public Flashcard getFlashcardId(int id)
    {
        return flashcardRepository.findById(id).orElse(null);
    }


}
