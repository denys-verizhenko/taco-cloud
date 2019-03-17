package org.verizhenko.tacocloud.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.verizhenko.tacocloud.tacos.Order;

import java.util.Date;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findByZip(String zip);

    List<Order> readOrdersByZipAndPlacedAtBetween(String zip, Date startDate, Date endDate);
}
