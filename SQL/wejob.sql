DROP DATABASE IF EXISTS `wejob`;
CREATE DATABASE `wejob`;
USE `wejob`


CREATE TABLE employers(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `logo` VARCHAR(255)
);

CREATE TABLE users(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE postings(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `post_time` DATETIME NOT NULL,
    `description` TEXT NOT NULL,
    `employer_id` INT NOT NULL,
    FOREIGN KEY (`employer_id`) REFERENCES employers(`id`) 
);

CREATE TABLE applications(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `post_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES users(`id`),
    FOREIGN KEY (`post_id`) REFERENCES postings(`id`)
);

CREATE TABLE messages(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `send_id` INT NOT NULL,
    `receive_id` INT NOT NULL,
    `message` TEXT NOT NULL,
    FOREIGN KEY (`send_id`) REFERENCES employers(`id`),
    FOREIGN KEY (`receive_id`) REFERENCES users(`id`),


);

