package com.mconnect.api.domain.Contrato;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import com.mconnect.api.domain.Usuario.Usuario;
import com.mconnect.api.domain.contratante.Contratante;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contrato")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contrato {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario artista;
    
    @ManyToOne
    @JoinColumn(name = "contratante_id")
    private Contratante contratante;

    
    private String local_Evento;
    private LocalDate data_Evento;
    private Integer tempo_Evento;
    private BigDecimal valor_Servico;
    private String status;
    
}
