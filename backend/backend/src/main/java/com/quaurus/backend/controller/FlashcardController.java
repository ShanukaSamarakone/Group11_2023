package com.quaurus.backend.controller;

import com.quaurus.backend.model.Flashcard;
import com.quaurus.backend.service.FlashcardServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/flashcard")
@CrossOrigin("http://localhost:3000")
public class FlashcardController {

    @Autowired
    private FlashcardServiceImp flashcardServiceImp;

    @GetMapping("getFlashcard/{id}")
    public Flashcard fetchFlashcard(@PathVariable int id)
    {
        return flashcardServiceImp.getFlashcardId(id);
    }

}
