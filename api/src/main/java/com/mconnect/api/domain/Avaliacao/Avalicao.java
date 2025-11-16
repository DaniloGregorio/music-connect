package com.mconnect.api.domain.Avaliacao;

import java.util.UUID;

import com.mconnect.api.domain.Usuario.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="avaliacao")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Avalicao {

    @Id
    @GeneratedValue
    private UUID id;

    private Integer nota;
    private String desc_avaliacao;

    @OneToMany
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    
}
