### Schema

CREATE DATABASE goals_db;
USE goals_db;

CREATE TABLE goals
(
	id int NOT NULL AUTO_INCREMENT,
	goal varchar(255) NOT NULL,
	complete BOOLEAN DEFAULT false,
	data TIMESTAMP,
	PRIMARY KEY (id)
);