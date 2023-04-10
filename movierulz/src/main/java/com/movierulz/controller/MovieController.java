package com.movierulz.controller;

import com.movierulz.entity.Movie;
import com.movierulz.service.MovieServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/movie/")
@CrossOrigin(origins = "*")
public class MovieController {

    private final MovieServiceImpl movieService;

    public MovieController(MovieServiceImpl movieService) {
        this.movieService = movieService;
    }

    @PostMapping("")
    public ResponseEntity<Movie> create(@RequestBody Movie movie) {
        return new ResponseEntity<>(movieService.createMovie(movie), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @PostMapping("/title")
    public ResponseEntity<Movie> getByTitle(@RequestBody Movie movie) {
        return new ResponseEntity<>(movieService.getMovieByTitle(movie.getTitle()), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteMovieByTitle(@RequestBody String title) {
        return new ResponseEntity<>(movieService.deleteMovieByTitle(title), HttpStatus.OK);
    }

}
