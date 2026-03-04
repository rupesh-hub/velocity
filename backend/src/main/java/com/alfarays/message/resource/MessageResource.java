package com.alfarays.message.resource;

import com.alfarays.message.model.MessageResponse;
import com.alfarays.message.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
@RequiredArgsConstructor
public class MessageResource {

    private final MessageService messageService;

    @GetMapping("/{id}")
    public ResponseEntity<MessageResponse> message(@PathVariable final Long id) {
        return ResponseEntity.ok(
                messageService.message(id)
        );
    }

}
