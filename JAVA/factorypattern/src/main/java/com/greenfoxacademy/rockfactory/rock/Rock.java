package com.greenfoxacademy.rockfactory.rock;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
@Setter
@Getter
public abstract class Rock {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long Id;
  private float density;
  private String color;
  private String minerals;
}
