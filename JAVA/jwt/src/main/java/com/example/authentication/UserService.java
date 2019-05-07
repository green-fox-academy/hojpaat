package com.example.authentication;

import org.springframework.stereotype.Service;

public interface UserService {
  ApplicationUser findById(Long id);
  ApplicationUser saveUser(ApplicationUser user);
}
