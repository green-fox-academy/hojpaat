package com.gfa.zoo.repository;

import com.gfa.zoo.model.Animal;
import org.springframework.data.repository.CrudRepository;

public interface AnimalRepository extends CrudRepository<Animal, Long> {
    Animal findAnimalById(Long id);
}
