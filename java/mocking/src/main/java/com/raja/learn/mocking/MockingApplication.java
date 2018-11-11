package com.raja.learn.mocking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({ "com.raja.learn.mocking", "com.raja.learn.mocking.model", "com.raja.learn.mocking.business", "com.raja.learn.mocking.controller", "com.raja.learn.mocking.repository"})
public class MockingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MockingApplication.class, args);
	}
}
