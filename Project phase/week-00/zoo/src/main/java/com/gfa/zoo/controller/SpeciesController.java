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

	@GetMapping({"", "/"})
	public Species getSpeciesById(Long id){
		return speciesService.getSpeciesById(id);
	}

	@PostMapping({"", "/"})
	public HashMap<String, String> addSpecies(@RequestBody Species species){
		HashMap<String, String> responseMessage = new HashMap<>();
		responseMessage.put("The next spcies was addid", species.getName());
		speciesService.addSpecies(species);
		return responseMessage;
	}

}
