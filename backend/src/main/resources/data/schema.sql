-- 1. Create the table
CREATE TABLE IF NOT EXISTS _messages
(
    id        BIGINT PRIMARY KEY,
    content   VARCHAR(500) NOT NULL,
    timestamp VARCHAR(100) NOT NULL
);