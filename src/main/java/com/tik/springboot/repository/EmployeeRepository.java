package com.tik.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tik.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}