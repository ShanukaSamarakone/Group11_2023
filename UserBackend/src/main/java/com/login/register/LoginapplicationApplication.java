package com.login.register;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import com.login.register.configuration.SecurityConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class LoginapplicationApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginapplicationApplication.class, args);
	}

}
