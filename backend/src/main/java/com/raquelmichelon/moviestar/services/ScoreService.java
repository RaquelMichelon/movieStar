package com.raquelmichelon.moviestar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.raquelmichelon.moviestar.dtos.MovieDTO;
import com.raquelmichelon.moviestar.dtos.ScoreDTO;
import com.raquelmichelon.moviestar.entities.Movie;
import com.raquelmichelon.moviestar.entities.Score;
import com.raquelmichelon.moviestar.entities.User;
import com.raquelmichelon.moviestar.repositories.MovieRepository;
import com.raquelmichelon.moviestar.repositories.ScoreRepository;
import com.raquelmichelon.moviestar.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		//precisa inserir o .get pois o getMovieId retorna um optional
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double average = sum / movie.getScores().size();
		
		movie.setScore(average);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
		
	}


}
 