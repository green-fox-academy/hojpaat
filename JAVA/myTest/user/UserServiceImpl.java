package com.greenfoxacademy.aragonitetribesapplication.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl {

  public String message;
  private UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public UserServiceImpl() {
  }

  public void saveUser(ApplicationUser user) {
    if (userRepository.findByUsername(user.getUsername()) == null && checkIfValid(user)) {
      userRepository.save(user);
    }
    this.message = "This username is already taken!";
  }

  public boolean checkIfValid(ApplicationUser user) {
    if (user.getUsername() == null || user.getUsername().length() == 0) {
      this.message = "Please insert a username!";
      return false;
    } else if (user.getPassword() == null || user.getPassword().length() == 0) {
      this.message = "Please insert a password!";
      return false;
    }
    return true;
  }
  
  public ApplicationUser fincUserById(Long id) {
    System.out.println(userRepository.findUserById(id));
    return userRepository.findUserById(id);
  }
}
