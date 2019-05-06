package com.greenfoxacademy.rockfactory.rock;

import com.greenfoxacademy.rockfactory.rock.rocktypes.Basalt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RockController {
  
  private RockService rockService;
  
  @Autowired
  public RockController(RockService rockService){
    this.rockService = rockService;
  }
  
  @PostMapping("/saveRock")
  public ResponseEntity saveRock(){
    Rock newRock = rockService.createRock("basalt", 2.8f, "brown");
    System.out.println(newRock.getColor());
    rockService.saveRock(newRock);
    return ResponseEntity.ok().body("Saved into database");
  }
}
