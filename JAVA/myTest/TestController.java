package com.greenfoxacademy.aragonitetribesapplication.kingdom;

import com.greenfoxacademy.aragonitetribesapplication.user.ApplicationUser;
import com.greenfoxacademy.aragonitetribesapplication.user.UserRepository;
import com.greenfoxacademy.aragonitetribesapplication.user.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {
  UserServiceImpl userService;
  
  @Autowired
  public TestController(UserServiceImpl userService) {
    this.userService = userService;
  }
  
  public TestController() {
  }
  
  @GetMapping({"", "/"})
  @ResponseBody
  public String home() {
    return "Hello";
  }
  

  @GetMapping("/{id}")
  @ResponseBody
  public Kingdom getUserById(@PathVariable long id) {
    ApplicationUser searchedUser = userService.fincUserById(id);
    return searchedUser.getKingdom();
  }
  
}
