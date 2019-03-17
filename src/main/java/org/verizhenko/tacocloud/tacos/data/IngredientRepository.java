package org.verizhenko.tacocloud.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.verizhenko.tacocloud.tacos.Ingredient;

public interface IngredientRepository extends CrudRepository<Ingredient, String> {

}
