package com.login.register.authentication;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginAuthentication {
    String authentication;
    Boolean status;

    public LoginAuthentication(String authentication, Boolean status) {
        this.authentication = authentication;
        this.status = status;
    }

    public LoginAuthentication() {
    }

    @Override
    public String toString() {
        return "LoginAuthentication{" +
                "authentication='" + authentication + '\'' +
                ", status=" + status +
                '}';
    }
}
