package com.gfa.zoo.controller;
import com.gfa.zoo.Animal;
import com.gfa.zoo.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    private AnimalService animalService;

    @Autowired
    public RestController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping("/animals")
    public List<Animal> getAllAnimal(){
        return animalService.getAllAnimals();
    }
}
