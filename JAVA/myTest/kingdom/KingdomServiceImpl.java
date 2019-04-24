package com.greenfoxacademy.aragonitetribesapplication.kingdom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KingdomServiceImpl {
  
  private KingdomRepository kingdomRepository;
  
  @Autowired
  public KingdomServiceImpl(KingdomRepository kingdomRepository) {
    this.kingdomRepository = kingdomRepository;
  }
  
  public KingdomServiceImpl() {
  }
  
  public boolean checkIfValid(Kingdom kingdom) {
    return kingdom.getName() != null && kingdom.getName().length() != 0;
  }
  
  public boolean checkIfTaken(Kingdom kingdom) {
    if (kingdomRepository.findKingdomByName(kingdom.getName()) == null) {
      return false;
    }
    return true;
  }
  
  public void saveKingdom(Kingdom kingdom) throws IllegalStateException {
    if (!checkIfValid(kingdom) && checkIfTaken(kingdom)) {
      throw new IllegalStateException();
    }
    kingdomRepository.save(kingdom);
  }
  
}
