package com.gfa.zoo.service;

import com.gfa.zoo.model.Species;
import com.gfa.zoo.repository.AnimalRepository;
import com.gfa.zoo.repository.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SpeciesService {

	private SpeciesRepository speciesRepository;

	@Autowired
	public SpeciesService(SpeciesRepository speciesRepository) {
		this.speciesRepository = speciesRepository;
	}

	public List<Species> getAllSpecies(){
		List<Species> species = new ArrayList<>();

		speciesRepository.findAll().forEach(species::add);
		return species;
	}

	public void addSpecies(Species species){
		speciesRepository.save(species);
	}

	public Species getSpeciesById(long id){
		return speciesRepository.findSpeciesBy(id);
	}

	public void deleteSpeciesById(long id){
		speciesRepository.deleteById(id);
	}

	public void updateSpecies(Species species) {
		speciesRepository.save(species);
	}

}
