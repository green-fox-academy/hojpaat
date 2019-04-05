package com.gfa.zoo.repository;

import com.gfa.zoo.model.Species;
import org.springframework.data.repository.CrudRepository;

public interface SpeciesRepository extends CrudRepository<Species, Long> {

	Species findSpeciesBy(Long id);

}
