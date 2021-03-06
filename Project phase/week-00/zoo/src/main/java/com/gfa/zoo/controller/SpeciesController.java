package com.gfa.zoo.controller;

import com.gfa.zoo.model.Species;
import com.gfa.zoo.service.SpeciesService;
import jdk.nashorn.internal.objects.annotations.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/species")
public class SpeciesController {

	private SpeciesService speciesService;

	@Autowired
	public SpeciesController(SpeciesService speciesService) {
		this.speciesService = speciesService;
	}

	@GetMapping({"", "/"})
	public List<Species> getAllspecies(){
		return speciesService.getAllSpecies();
	}

	@GetMapping({"/{id}"})
	public Species getSpeciesById(@PathVariable Long id){
		return speciesService.getSpeciesById(id);
	}

	@PostMapping({"", "/"})
	public HashMap<String, String> addSpecies(@RequestBody Species species){
		HashMap<String, String> responseMessage = new HashMap<>();
		responseMessage.put("The next spcies was addid", species.getSpeciesName());
		speciesService.addSpecies(species);
		return responseMessage;
	}

	@PutMapping("/{id}")
	public HashMap<String, String> updateSpecies(@RequestBody Species species, @PathVariable Long id){
		HashMap<String, String> responseMessage = new HashMap<>();
		responseMessage.put("Species with the followind ide updated", Long.toString(id));
		speciesService.updateSpecies(species);
		return responseMessage;
	}

	@DeleteMapping("/{id}")
	public HashMap<String, String> deleteSpecies(@PathVariable Long id){
		HashMap<String, String> responseMessage = new HashMap<>();
		responseMessage.put("Species with the following id was deleted", Long.toString(id));
		speciesService.deleteSpecies(id);
		return responseMessage;
	}

}
