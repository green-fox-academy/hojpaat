package com.gfa.zoo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Animal {

    @Id
//    @Column(name = "id")
    private long id;
//    @Column(name = "name")
    private String name;
//    @Column(name = "species_id")
    private String speciesId;

    public Animal(long id, String name, String speciesId) {
        this.id = id;
        this.name = name;
        this.speciesId = speciesId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(String speciesId) {
        this.speciesId = speciesId;
    }
}
