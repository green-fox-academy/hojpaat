package com.gfa.zoo.controller;
import com.gfa.zoo.model.Animal;
import com.gfa.zoo.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    private AnimalService animalService;

    @Autowired
    public RestController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @PostMapping("/animals")
    public HashMap<String, String> addAnimal(@RequestBody Animal animal){
        HashMap<String, String> returnMessage = new HashMap<>();
        returnMessage.put("The next animal was addid", animal.getName());
        animalService.addAnimal(animal);
        return returnMessage;
    }

    @GetMapping("/animals")
    public List<Animal> getAllAnimal(){
        return animalService.getAllAnimals();
    }

    @GetMapping("/animals/{id}")
    public Object getAnimal(
            @PathVariable("id") Integer id){
        return animalService.getAnimal(id);
    }

    @DeleteMapping("/animals/{id}")
    public HashMap<String, String> deleteAnimal(@PathVariable("id") Integer id){
        HashMap<String, String> responseMessage = new HashMap<>();
        System.out.println(animalService.getAnimal(id).getClass());;
        responseMessage.put("Animal with the following Id was deleted", Integer.toString(id));
        animalService.deleteAnimal(id);
        return responseMessage;
    }

    @PutMapping("/animals/{id}")
    public HashMap<String, String> updateAnimal(
            @RequestBody Animal animal,
            @PathVariable("id") Integer id){
        String idString = Integer.toString(id);
        HashMap<String, String> responseMessage = new HashMap<>();
        responseMessage.put("Animal with the following id was updated", idString);
        animalService.updateAnimal(animal);
        return responseMessage;
    }

}
