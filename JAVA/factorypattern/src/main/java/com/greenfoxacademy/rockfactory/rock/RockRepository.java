package com.greenfoxacademy.rockfactory.rock;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RockRepository extends CrudRepository<Rock, Long> {
}
