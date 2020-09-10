DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT,
  room VARCHAR(20),
  username VARCHAR(20),
  messageText VARCHAR(100),
  createdAt TIMESTAMP
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


