package com.example.authentication;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
  
  private UserRepository userRepository;
  private BCryptPasswordEncoder bCryptPasswordEncoder;
  
  @Autowired
  public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
    this.userRepository = userRepository;
    this.bCryptPasswordEncoder = bCryptPasswordEncoder;
  }
  
  public ApplicationUser findById(Long id){
    return userRepository.findApplicationUserById(id);
  }
  
  public ApplicationUser saveUser(ApplicationUser user){
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    return userRepository.save(user);
  }
  
  public List<ApplicationUser> findAllUsers(){
    return userRepository.findAll();
  }
}
