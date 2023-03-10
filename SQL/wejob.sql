DROP DATABASE IF EXISTS `wejob`;
CREATE DATABASE `wejob`;
USE `wejob`;

CREATE TABLE `employers` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `email` VARCHAR (255) NOT NULL UNIQUE,
    `password` VARCHAR (255) NOT NULL,
    `description` TEXT,
    `logo` VARCHAR(255)
);

CREATE TABLE `users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(64) NOT NULL,
    `last_name` VARCHAR(64) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `user_skills` ( 
  `id` INT AUTO_INCREMENT PRIMARY KEY, 
  `user_id` INT NOT NULL, 
  `skill` VARCHAR(255) NOT NULL, 
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) 
); 



CREATE TABLE `postings` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `post_time` DATETIME NOT NULL,
    `description` TEXT NOT NULL,
    `employer_id` INT NOT NULL,
    FOREIGN KEY (`employer_id`) REFERENCES `employers`(`id`) 
);

CREATE TABLE `posting_skills` (
    `id` INT AUTO_INCREMENT PRIMARY KEY, 
    `posting_id` INT NOT NULL, 
    `skill` VARCHAR(255) NOT NULL, 
    FOREIGN KEY (`posting_id`) REFERENCES `postings`(`id`) 
);


CREATE TABLE `applications`(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `post_id` INT NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`post_id`) REFERENCES `postings`(`id`)
);



CREATE TABLE `messages`(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `send_id` INT NOT NULL,
    `receive_id` INT NOT NULL,
    `message` TEXT NOT NULL,
    FOREIGN KEY (`send_id`) REFERENCES `employers`(`id`),
    FOREIGN KEY (`receive_id`) REFERENCES `users`(`id`)


);


INSERT INTO `users` VALUES(0,"Maxim", "Bacar", "maximbacar@hotmail.ca", "11ba65852271cd24c56c865a9635b90616326949ff2bf6cd07eacaf788bad320");
INSERT INTO `user_skills` VALUES(0,1,"Java programming");
INSERT INTO `user_skills` VALUES(0,1,"C++");

INSERT INTO `employers` VALUES(0,"Microsoft", "career@microsoft.com","9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", "Microsoft TM", "xx");


INSERT INTO `postings` VALUES(0,"C++ Developper","2023-01-31 01:15:00", "Description", 1);
INSERT INTO `postings` VALUES(0,"Java Developper","2022-12-31 01:15:00", "Description", 1);
INSERT INTO `postings` VALUES(0,"Android Developper","2023-02-28 01:15:00", "Develop a mobile game", 1);
INSERT INTO `postings` VALUES(0,"Android Developper","2023-01-31 01:15:00", "Develop a new microsoft app", 1);
INSERT INTO `postings` VALUES(0,"JavaScript Developper","2023-03-03 01:15:00", "Description", 1);
INSERT INTO `postings` VALUES(0,"Backend Developper","2023-03-01 12:15:00", "Develop backend", 1);


INSERT INTO `posting_skills` VALUES(0,1,"C++");

INSERT INTO `posting_skills` VALUES(0,2,"Java programming");

INSERT INTO `posting_skills` VALUES(0,3,"C++");
INSERT INTO `posting_skills` VALUES(0,3,"Java programming");

INSERT INTO `posting_skills` VALUES(0,4,"C++");
INSERT INTO `posting_skills` VALUES(0,4,"Java programming");

INSERT INTO `posting_skills` VALUES(0,5,"JavaScript");

INSERT INTO `posting_skills` VALUES(0,6,"Java programming");
INSERT INTO `posting_skills` VALUES(0,6,"C++");



SELECT * FROM `users`;
SELECT * FROM `user_skills` WHERE `user_id`=1;


SELECT * FROM `postings`;
SELECT * FROM `posting_skills`;


