package com.gfa.zoo.repository;

import com.gfa.zoo.model.Species;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeciesRepository extends CrudRepository<Species, Long> {

	Species findSpeciesById(Long id);

}
