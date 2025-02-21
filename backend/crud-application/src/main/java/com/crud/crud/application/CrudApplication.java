package com.crud.crud.application;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
@MapperScan("com.crud.crud.application.repository")  // ✅ MyBatis Mapper 스캔 추가
public class CrudApplication {
    public static void main(String[] args) {
        // ✅ Spring Boot 애플리케이션 실행 후 ApplicationContext 저장
        ApplicationContext ctx = SpringApplication.run(CrudApplication.class, args);

        // ✅ MyBatis의 SqlSession 가져오기
        SqlSession session = ctx.getBean(SqlSession.class);
        
        // ✅ 등록된 MyBatis 매퍼 목록 출력
        System.out.println("✅ 등록된 MyBatis 매퍼 목록: " + session.getConfiguration().getMappedStatementNames());
    }
}
