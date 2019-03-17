package org.verizhenko.tacocloud.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.verizhenko.tacocloud.tacos.Taco;

public interface TacoRepository extends CrudRepository<Taco, Long> {

}
