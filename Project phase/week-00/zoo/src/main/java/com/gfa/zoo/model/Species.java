package com.gfa.zoo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "species")
public class Species {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String speciesName;

    @OneToMany(targetEntity = Animal.class, mappedBy = "id", orphanRemoval = false, fetch = FetchType.LAZY)
    private List<Animal> animals;

	public Species() {
	}

	public Species(String speciesName) {
		this.speciesName = speciesName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSpeciesName() {
		return speciesName;
	}

	public void setNSpeciesName(String speciesName) {
		this.speciesName = speciesName;
	}
}
