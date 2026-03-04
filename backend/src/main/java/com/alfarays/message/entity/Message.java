package com.alfarays.message.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="_messages")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false, name = "id")
    private Long id;

    private String content;
    private String timestamp;

}
