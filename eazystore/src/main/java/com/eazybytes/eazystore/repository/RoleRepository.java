package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Product;
import com.eazybytes.eazystore.entity.Role;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository  //Optional
public interface RoleRepository extends JpaRepository<Role,Long> {
    @Cacheable("roles")
    // ROLE_USER -> CACHE MISS -> DB call -> Cache Store (ROLE_USER -> Role record) -> Customer 1
    // ROLE_USER -> CACHE HIT -> Customer 2
    // ROLE_ADMIN -> CACHE MISS -> DB call -> Cache Store (ROLE_ADMIN -> Role record) -> Customer X
    Optional<Role> findByName(String name);

    //Below caching is only for learning purpose.
//    @CachePut(value = "roles",key = "#role.name")
//    Role save(Role role);
//
//    @CacheEvict(value = "roles",key = "#name")
//    void deleteByName(String name);
//
//    @CacheEvict(value = "roles", allEntries = true)
//    void deleteAll();
}
