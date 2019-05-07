package com.example.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  
  private UserService userService;
  
  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }
  
  @PostMapping("/register")
  public ResponseEntity registerUser(@RequestBody ApplicationUser user){
    return ResponseEntity.status(200).body(userService.saveUser(user));
  }
  
  @GetMapping("/users")
  public ResponseEntity getAllUsers(){
    return ResponseEntity.status(200).body(userService.findAllUsers());
  }
}
