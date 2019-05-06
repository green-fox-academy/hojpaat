package com.greenfoxacademy.rockfactory.rock;

import com.greenfoxacademy.rockfactory.rock.rocktypes.Basalt;
import com.greenfoxacademy.rockfactory.rock.rocktypes.Granite;

import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public enum RockType {
  BASALT {
    public Rock createRock(float density, String color) {
      return new Basalt(density, color);
    }
  },
  GRANITE {
    public Rock createRock (float density, String color) {
      Rock newRock = new Granite(density, color);
      return newRock;
    }
  };
  
  private static final Map<String, RockType> rockTypeMap = new HashMap<>();
  static {
    for (RockType rockType : EnumSet.allOf(RockType.class)){
    rockTypeMap.put(rockType.name(), rockType);
    }
  }

  public static RockType getRockType(String rocktype){
    return rockTypeMap.get(rocktype.toUpperCase());
  }
  
  public Rock createRock(float density, String color){
    return null;
  }
}
