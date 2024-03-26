package com.quaurus.backend.controller;

import com.quaurus.backend.model.CV;
import com.quaurus.backend.service.CVService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cv")
@CrossOrigin("http://localhost:3000")

public class CVController {

    @Autowired
    private CVService cvServiceImp;

    @PostMapping("/addCV")
    public CV postDetails(@RequestBody CV cv)
    {
        return cvServiceImp.saveDetails(cv);
    }

    @GetMapping("/getCVByID/{id}")
    public CV fetchDetailsById(@PathVariable int id)
    {
        return cvServiceImp.getCVDetailsUsingId(id);
    }
}