package com.greenfoxacademy.aragonitetribesapplication.kingdom;

import org.springframework.data.repository.CrudRepository;

public interface KingdomRepository extends CrudRepository<Kingdom, Long> {
  Kingdom findKingdomById(Long id);
  
  Kingdom findKingdomByName(String string);
  
}
