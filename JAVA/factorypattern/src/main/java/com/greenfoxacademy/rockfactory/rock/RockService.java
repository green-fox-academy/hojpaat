package com.greenfoxacademy.rockfactory.rock;

public interface RockService {
    Rock createRock(String rockType, float density, String color);
    Rock saveRock(Rock rock);
}
