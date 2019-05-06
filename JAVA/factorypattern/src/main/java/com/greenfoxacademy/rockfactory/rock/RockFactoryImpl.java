package com.greenfoxacademy.rockfactory.rock;

public class RockFactoryImpl implements RockFactory{
  
  @Override
  public Rock createRock(RockType rockType, float density, String color) {
    return rockType.createRock(density, color);
  }
}
