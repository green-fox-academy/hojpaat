package com.greenfoxacademy.rockfactory.rock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RockServiceImpl implements RockService{

  private RockRepository rockRepository;
  
  @Autowired
  public RockServiceImpl(RockRepository rockRepository){
    this.rockRepository = rockRepository;
  }
  
  public Rock createRock(String rockType, float density, String color){
    RockFactoryImpl rockFactoryImpl = new RockFactoryImpl();
//    return rockFactoryImpl.createRock(RockType.getRockType(rockType), density, color);
    Rock newRock = rockFactoryImpl.createRock(RockType.getRockType(rockType), density, color );
    System.out.println(newRock.getDensity());
    return newRock;
  }
  
  public Rock saveRock(Rock rock){
    return rockRepository.save(rock);
  }
}
