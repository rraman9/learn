package com.raja;

import brave.sampler.Sampler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class PlacementApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlacementApplication.class, args);
    }
}

@RestController
class PlacementController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    RestTemplate restTemplate;

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public Sampler defaultSampler() {
        return Sampler.ALWAYS_SAMPLE;
    }

    @GetMapping(value = "/placement")
    public String method3() {
        LOG.info("Inside placement");
        String baseUrl = "http://localhost:8083/beast";
        try {
            Thread.sleep(1000);
        } catch (Exception ex) {

        }
        String response = (String) restTemplate.exchange(baseUrl, HttpMethod.GET, null, String.class).getBody();
        LOG.info("Broker restriction result " + response);
        return "Placement created\n" + response;
    }
}
