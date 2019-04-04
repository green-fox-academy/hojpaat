package com.gfa.zoo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Animal {

    @Id
//    @Column(name = "id")
    private Integer id;
//    @Column(name = "name")
    private String name;
//    @Column(name = "species_id")
    private Integer speciesId;

    public Animal() {
    }

    public Animal(Integer id, String name, Integer speciesId) {
        this.id = id;
        this.name = name;
        this.speciesId = speciesId;
    }

    public long getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(Integer speciesId) {
        this.speciesId = speciesId;
    }
}
