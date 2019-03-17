package org.verizhenko.tacocloud.tacos.web;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import org.verizhenko.tacocloud.tacos.Ingredient;
import org.verizhenko.tacocloud.tacos.data.IngredientRepository;

@Component
public class IngredientByIdConverter implements Converter<String, Ingredient> {

    private IngredientRepository ingredientRepo;

    public IngredientByIdConverter(IngredientRepository ingredientRepo) {
        this.ingredientRepo = ingredientRepo;
    }

    @Override
    public Ingredient convert(String id) {
        return ingredientRepo.findById(id).get();
    }
}
