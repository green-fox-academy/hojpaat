package com.greenfoxacademy.rockfactory.rock;

public interface RockFactory {
  Rock createRock(RockType rockType, float density, String color);
}
