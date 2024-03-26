package com.login.register.repository;

import com.login.register.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findOneByUsernameAndPassword(String username, String password);
    User findByUsername(String username);

}