package com.greenfoxacademy.rockfactory.rock;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@Entity
public abstract class Rock {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private float density;
  private String color;
//  private String minerals;
  
  public Rock(){
  }
  
  public Rock(float density, String color) {
    this.density = density;
    this.color = color;
  }
}
