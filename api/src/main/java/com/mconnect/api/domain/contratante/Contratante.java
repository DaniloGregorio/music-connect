package com.mconnect.api.domain.contratante;

import java.util.UUID;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "Contratante")
@Entity
public class Contratante {

    @Id
    @GeneratedValue
    private UUID id_contratante;
    
}
