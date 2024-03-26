package com.login.register.controller;

import com.login.register.authentication.LoginAuthentication;
import com.login.register.data.LoginData;
import com.login.register.data.UserData;
import com.login.register.model.User;
import com.login.register.repository.UserRepository;
import com.login.register.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody UserData userData) {
        String id = userService.addUser(userData);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginData loginData) {
        LoginAuthentication loginAuthentication = userService.loginUser(loginData);
        return ResponseEntity.ok(loginAuthentication);
    }
}