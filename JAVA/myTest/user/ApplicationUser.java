package com.greenfoxacademy.aragonitetribesapplication.user;

import com.greenfoxacademy.aragonitetribesapplication.kingdom.Kingdom;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;


@Entity
@Getter
@Setter
public class ApplicationUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  private String password;
  private String userEmail;
  
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "kingdom_id")
//  @Fetch(FetchMode.JOIN)
  private Kingdom kingdom;
  
  public ApplicationUser() {
  }

  public ApplicationUser(String username, String password) {
    this.username = username;
    this.password = password;
  }
}
