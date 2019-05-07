package com.example.authentication;

import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
  ApplicationUser findById(Long id);
  ApplicationUser saveUser(ApplicationUser user);
  List<ApplicationUser> findAllUsers();
}
