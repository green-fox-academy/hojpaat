package com.example.authentication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<ApplicationUser, Long> {
  
  List<ApplicationUser> findAllBy();
  
  ApplicationUser findByUsername(String username);
  
  ApplicationUser findApplicationUserById(Long id);
}
