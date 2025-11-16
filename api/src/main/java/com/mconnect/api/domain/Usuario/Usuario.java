package com.mconnect.api.domain.Usuario;


import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "usuario")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue
    private UUID id;

    private String email;
    private String usuario;
    private String senha;
    private String local_atuacao;
    private String imagem_perfil_url;
    private String banner_url;
    private String descricao;
    private String tipo_usuario;

}
