package com.greenfoxacademy.rockfactory.rock.rocktypes;

import com.greenfoxacademy.rockfactory.rock.Rock;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
public class Granite extends Rock {
  private long Id;
  private float density;
  private String color;
  private String minerals;
  
  public Granite (){
    super();
  }
  
  public Granite(float density, String color) {
    super(density, color);
  }
}
