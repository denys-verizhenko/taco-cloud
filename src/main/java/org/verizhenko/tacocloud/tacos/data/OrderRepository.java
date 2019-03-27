package org.verizhenko.tacocloud.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.verizhenko.tacocloud.tacos.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}
