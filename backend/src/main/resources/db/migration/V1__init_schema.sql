-- 1. Create the table
CREATE TABLE IF NOT EXISTS _messages
(
    id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    content   VARCHAR(500) NOT NULL,
    timestamp VARCHAR(100) NOT NULL
);

INSERT INTO _messages(id, content, timestamp)
VALUES (1, 'Hello, this is the first message!', '2026-03-04 10:20:00'),
       (2, 'Working on the Velocity-GitOps project.', '2026-03-04 10:21:05'),
       (3, 'Testing Java 21 backend connection.', '2026-03-04 10:22:10'),
       (4, 'Docker containers are running smoothly.', '2026-03-04 10:23:15'),
       (5, 'Final health check passed successfully.', '2026-03-04 10:24:20');