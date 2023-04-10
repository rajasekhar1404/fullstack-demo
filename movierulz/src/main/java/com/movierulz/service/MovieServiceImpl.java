package com.movierulz.service;

import com.mongodb.client.result.DeleteResult;
import com.movierulz.entity.Movie;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl {

    private final MongoTemplate mongoTemplate;

    public MovieServiceImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public Movie createMovie(Movie movie) {
        return mongoTemplate.save(movie);
    }

    public Movie getMovieByTitle(String title) {
        return mongoTemplate.findOne(Query.query(Criteria.where("title").is(title)), Movie.class);
    }

    public List<Movie> getAllMovies() {
        return mongoTemplate.findAll(Movie.class);
    }

    public String deleteMovieByTitle(String title) {
        DeleteResult result = mongoTemplate.remove(Query.query(Criteria.where("title").is(title)), "movierulz");
        if (result.getDeletedCount() == 1) {
            return "deleted successfully";
        }
        return "Movie not found";
    }
}
