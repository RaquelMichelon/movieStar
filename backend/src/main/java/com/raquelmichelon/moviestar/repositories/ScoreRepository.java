package com.raquelmichelon.moviestar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.raquelmichelon.moviestar.entities.Score;
import com.raquelmichelon.moviestar.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
