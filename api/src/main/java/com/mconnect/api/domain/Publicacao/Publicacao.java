package com.mconnect.api.domain.Publicacao;

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
@Table(name = "publicacao")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Publicacao {
    
    @Id
    @GeneratedValue
    private UUID id;

    private String imagem_url;
    private String video_url;
    private String audio_url;

    @OneToMany
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
