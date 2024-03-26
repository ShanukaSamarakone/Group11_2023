package com.login.register.service;

import com.login.register.authentication.LoginAuthentication;
import com.login.register.data.LoginData;
import com.login.register.data.UserData;

public interface UserService {
    String addUser(UserData userData);

    LoginAuthentication loginUser(LoginData loginData);
}