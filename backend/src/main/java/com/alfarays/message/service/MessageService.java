package com.alfarays.message.service;

import com.alfarays.message.model.MessageResponse;
import com.alfarays.message.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;

    public MessageResponse message(final Long id) {
        return messageRepository.findById(id)
                .map(message-> new MessageResponse(message.getContent(), message.getTimestamp()))
                .orElseThrow(()-> new RuntimeException("Message not found !"));
    }

}
