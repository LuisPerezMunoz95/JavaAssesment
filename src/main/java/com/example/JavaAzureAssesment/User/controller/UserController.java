package com.example.JavaAzureAssesment.User.controller;

import com.example.JavaAzureAssesment.User.entity.User;
import com.example.JavaAzureAssesment.User.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping
    public List<User> getUser() { return userService.findAll();}
    @PostMapping("/{id}")
    public void save(@RequestBody User user) {userService.save(user);}

}
