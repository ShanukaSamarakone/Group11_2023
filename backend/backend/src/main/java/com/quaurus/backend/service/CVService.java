package com.quaurus.backend.service;

import com.quaurus.backend.model.CV;
import com.quaurus.backend.repository.CVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CVService {

    @Autowired
    private CVRepository cvRepository;

    public CV saveDetails(CV cv){

        return cvRepository.save(cv);
    }

    public CV getCVDetailsUsingId(int id){

        return cvRepository.findById(id).orElse(null);
    }
}
