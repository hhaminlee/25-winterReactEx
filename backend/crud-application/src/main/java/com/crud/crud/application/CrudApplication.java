package com.crud.crud.application;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.crud.crud.application.repository")  
public class CrudApplication {
    public static void main(String[] args) {
        // ✅ Spring Boot 애플리케이션 실행 후 ApplicationContext 저장
        SpringApplication.run(CrudApplication.class, args);

    }
}
