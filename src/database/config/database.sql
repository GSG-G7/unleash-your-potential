BEGIN;

DROP TABLE IF EXISTS users,posts CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    content TEXT,
    published_at TEXT,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

COMMIT;