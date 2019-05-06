package com.example.authentication;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
public class UserServiceImpl implements UserService{
  
  private UserRepository userRepository;
  
  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
  
  public ApplicationUser findById(Long id){
    return userRepository.findApplicationUserById(id);
  }
  
}
