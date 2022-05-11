package com.raquelmichelon.moviestar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.raquelmichelon.moviestar.dtos.MovieDTO;
import com.raquelmichelon.moviestar.entities.Movie;
import com.raquelmichelon.moviestar.repositories.MovieRepository;

@Service
public class MovieService {
	//faz a transacao de buscar os filmes
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		 Page<Movie> result = movieRepository.findAll(pageable);
		 
		 Page<MovieDTO> page = result.map(movie -> new MovieDTO(movie));
		 return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		 Movie result = movieRepository.findById(id).get();
		 
		 MovieDTO dto = new MovieDTO(result);
		 
		 return dto;
	}
	
	
	
	

}
 