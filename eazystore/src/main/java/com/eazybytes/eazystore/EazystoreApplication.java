package com.eazybytes.eazystore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;

@SpringBootApplication()
//@EnableJpaRepositories
//@EntityScan
public class EazystoreApplication {
	public static void main(String[] args) {
		SpringApplication.run(EazystoreApplication.class, args);
	}

}
