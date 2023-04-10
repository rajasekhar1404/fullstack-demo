package com.movierulz.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "movierulz")
public class Movie {
    @Id
    private String id;
    private String title;
    private String imageURL;
}
