package com.crud.crud.application.repository;

import com.crud.crud.application.model.User;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface UserMapper {
    List<User> findAll();
    User findById(Long id);
    void insertUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
}
