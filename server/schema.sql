DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room VARCHAR(20) NOT NULL,
  username VARCHAR(20) NOT NULL,
  messageText VARCHAR(100) NOT NULL
);

-- CREATE TABLE messages (
--   id INT,
--   roomID INT,
--   usernameID INT,
--   messageText VARCHAR(100),
--   createdAt TIMESTAMP
-- );

-- CREATE TABLE rooms (
--   id INT,
--   room VARCHAR(20)
-- );

-- CREATE TABLE usernames (
--   id INT,
--   username VARCHAR(20)
-- );

--

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


