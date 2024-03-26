package com.login.register.service.implementation;

import com.login.register.authentication.LoginAuthentication;
import com.login.register.data.LoginData;
import com.login.register.data.UserData;
import com.login.register.model.User;
import com.login.register.repository.UserRepository;
import com.login.register.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserData userData) {

        User user = new User (

                userData.getId(),
                userData.getName(),
                userData.getUsername(),
                userData.getEmail(),
                this.passwordEncoder.encode(userData.getPassword())

        );

        userRepository.save(user);
        return user.getUsername();

    }

    @Override
    public LoginAuthentication loginUser(LoginData loginData) {
        String msg = "";
        User registeredUser = userRepository.findByUsername(loginData.getUsername());
        if (registeredUser != null) {
            String password = loginData.getPassword();
            String encodedPassword = registeredUser.getPassword();
            Boolean correctPassword = passwordEncoder.matches(password, encodedPassword);
            if (correctPassword) {
                Optional<User> user = userRepository.findOneByUsernameAndPassword(loginData.getUsername(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginAuthentication("Login Success", true);
                } else {
                    return new LoginAuthentication("Login Failed", false);
                }
            } else {
                return new LoginAuthentication("password Not Match", false);
            }
        }else {
            return new LoginAuthentication("Username does not exist", false);
        }
    }
}