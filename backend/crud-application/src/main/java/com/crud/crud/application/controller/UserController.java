package com.crud.crud.application.controller;

import com.crud.crud.application.exception.UserNotFoundException;
import com.crud.crud.application.model.User;
import com.crud.crud.application.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserMapper userMapper;

    // 🔹 POST: 새로운 사용자 추가
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        userMapper.insertUser(newUser);  // MyBatis에서는 insert를 별도로 수행
        return newUser;
    }

    // 🔹 GET: 모든 사용자 조회
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userMapper.findAll();
    }

    // 🔹 GET: 특정 ID의 사용자 조회
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        User user = userMapper.findById(id);
        if (user == null) { // MyBatis는 Optional을 반환하지 않으므로 수동 체크 필요
            throw new UserNotFoundException(id);
        }
        return user;
    }

    // 🔹 PUT: 사용자 업데이트
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        User existingUser = userMapper.findById(id);
        if (existingUser == null) {
            throw new UserNotFoundException(id);
        }
        // 기존 사용자 정보 업데이트
        existingUser.setUsername(newUser.getUsername());
        existingUser.setName(newUser.getName());
        existingUser.setEmail(newUser.getEmail());

        userMapper.updateUser(existingUser); // MyBatis에서는 update를 직접 호출
        return existingUser;
    }

    // 🔹 DELETE: 사용자 삭제
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        User user = userMapper.findById(id);
        if (user == null) {
            throw new UserNotFoundException(id);
        }
        userMapper.deleteUser(id); // MyBatis에서는 delete를 직접 호출
        return "User with id " + id + " has been deleted successfully.";
    }
}
