package com.alfarays.message;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/messages")
public class MessageController {

    @GetMapping
    public ResponseEntity<MessageResponse> message() {
        return ResponseEntity.ok(
                new MessageResponse(
                        "A high-concurrency urban simulation engine leveraging Java Virtual Threads and Structured Concurrency to manage 50,000+ real-time entities.",
                        LocalDateTime.now().toString()
                )
        );
    }

}
