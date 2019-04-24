package com.greenfoxacademy.aragonitetribesapplication.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<ApplicationUser, Long> {

  List<ApplicationUser> findByUsername(String name);

  ApplicationUser findUserById(Long id);
}
