package com.greenfoxacademy.aragonitetribesapplication.kingdom;

import com.greenfoxacademy.aragonitetribesapplication.user.ApplicationUser;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "kingdoms")
@Getter
@Setter
public class Kingdom {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String name;
  
  @OneToOne(mappedBy = "kingdom", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private ApplicationUser user;
  
  public Kingdom() {
  }
  
  public Kingdom(String name) {
    this.name = name;
  }
}
