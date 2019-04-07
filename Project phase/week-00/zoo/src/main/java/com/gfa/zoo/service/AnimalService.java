package com.gfa.zoo.service;

import com.gfa.zoo.model.Animal;
import com.gfa.zoo.model.Species;
import com.gfa.zoo.repository.AnimalRepository;
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

    public void addAnimal(Animal animal){
        animalRepository.save(animal);
    }

    public Animal getAnimal(long id){
        //Animal searchedAnimal = (Animal) animalRepository.findById((id));
        return animalRepository.findAnimalById(id);
    }

    public void deleteAnimal(long id){
        animalRepository.deleteById(id);
    }

    public void updateAnimal(Animal animal){
       animalRepository.save(animal);
   }

   public Species getAnimalSpecies(Animal animal){
        return animal.getSpecies();
   }

}
