 package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/profiles")
	public Collection<Profile> getProfiles () {
		Collection<Profile> profiles = new ArrayList<>();
		profiles.add(new Profile("Aneesh", "9", "cricket"));
		profiles.add(new Profile("Aparna", "19", "jogging"));
		profiles.add(new Profile("Raja", "29", "sleeping"));
		return profiles;
	}
}
