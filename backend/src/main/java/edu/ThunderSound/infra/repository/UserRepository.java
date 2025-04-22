/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package edu.ThunderSound.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ThunderSound.domain.user.User;

/**
 *
 * @author Pedro Durand
 */
public interface UserRepository extends JpaRepository<User, String>{
    User findByUsername(String username);

}
