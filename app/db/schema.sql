DROP DATABASE IF EXISTS friendfinderdb;
CREATE DATABASE friendfinderdb;
USE friendfinderdb;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(50) NOT NULL,
	link VARCHAR(100),
	gender ENUM('Male','Female') NOT NULL,
	userscore VARCHAR(25) NOT NULL, 
	PRIMARY KEY (id)
);

INSERT INTO users(fullname, link, gender, userscore)
VALUES ("John Fox","https://www.facebook.com/johnfox/","Male","[1,1,1,1,1,1,1]");
INSERT INTO users(fullname, link, gender, userscore)
VALUES ("Emma Lee","https://www.facebook.com/emmalee/","Female","[2,2,2,2,2,2,2]");
