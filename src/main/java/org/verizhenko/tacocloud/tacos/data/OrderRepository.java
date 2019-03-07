package org.verizhenko.tacocloud.tacos.data;

import org.verizhenko.tacocloud.tacos.Order;

public interface OrderRepository {

    Order save(Order order);
}
