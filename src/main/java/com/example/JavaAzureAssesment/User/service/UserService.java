package com.example.JavaAzureAssesment.User.service;

import com.example.JavaAzureAssesment.User.entity.User;
import com.example.JavaAzureAssesment.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void save(User user) {userRepository.save(user);}

    public List<User> findAll(){ return userRepository.findAll();}

}
