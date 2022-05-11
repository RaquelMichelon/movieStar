package com.raquelmichelon.moviestar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.raquelmichelon.moviestar.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
