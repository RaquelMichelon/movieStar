package com.raquelmichelon.moviestar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.raquelmichelon.moviestar.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}
