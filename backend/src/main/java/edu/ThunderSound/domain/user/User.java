package edu.ThunderSound.domain.user;

import javax.annotation.processing.Generated;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String username;
    private String password;
    private String email;

    public User(){}
}



public class Main {
    public static void main(String[] args) {
        BookingFacade facade = new BookingFacade();
        facade.bookFlight("São Paulo", "Rio de Janeiro", 123, "4111-xxxx-xxxx-1111", "cliente@email.com");
    }
}

