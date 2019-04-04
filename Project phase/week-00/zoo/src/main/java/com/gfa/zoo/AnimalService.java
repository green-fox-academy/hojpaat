package com.gfa.zoo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnimalService {

    private AnimalRepository animalRepository;


    @Autowired
    public AnimalService(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    public List<Animal> getAllAnimals(){
        List<Animal> animals = new ArrayList<>();

        animalRepository.findAll()
                .forEach(animals::add);
        return animals;
    }

}
