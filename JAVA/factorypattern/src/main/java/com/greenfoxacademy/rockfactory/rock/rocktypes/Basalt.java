package com.greenfoxacademy.rockfactory.rock.rocktypes;

import com.greenfoxacademy.rockfactory.rock.Rock;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
public class Basalt extends Rock {
  private long Id;
  private float density;
  private String color;
  private String minerals;
  
  public Basalt(){
    super();
  }
  
  public Basalt(float density, String color) {
    super(density, color);
  }
}
