DROP DATABASE IF EXISTS `wejob`;
CREATE DATABSE `wejob`;
USE `wejob`


CREATE TABLE employers(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `description` text,
    `logo` VARCHAR(255)
);

CREATE TABLE users(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

)


CREATE TABLE messages(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `send_id` INT NOT NULL,
    `receive_id` INT NOT NULL,
    `message` TEXT NOT NULL,
    FOREIGN KEY (`send_id`) REFERENCES employers(`id`),
    FOREIGN KEY (`receive_id`) REFERENCES users(`id`),


)

