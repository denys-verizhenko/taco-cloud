package org.verizhenko.tacocloud.tacos.data;

import org.verizhenko.tacocloud.tacos.Ingredient;

public interface IngredientRepository {

    Iterable<Ingredient> findAll();

    Ingredient findOne(String id);

    Ingredient save(Ingredient ingredient);
}
