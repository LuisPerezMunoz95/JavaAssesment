package com.example.JavaAzureAssesment.controller;

import com.example.JavaAzureAssesment.entity.User;
import com.example.JavaAzureAssesment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/users")
    public List<User> views(){
        return repo.findAll();
    }
    @PostMapping("/users")
    public User add(@RequestBody User val){
        return repo.save(val);
    }

}
