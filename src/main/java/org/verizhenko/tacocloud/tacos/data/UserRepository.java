package org.verizhenko.tacocloud.tacos.data;

import org.springframework.data.repository.CrudRepository;
import org.verizhenko.tacocloud.tacos.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
}
