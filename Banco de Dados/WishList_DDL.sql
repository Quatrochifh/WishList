CREATE DATABASE WISHLIST;

------DDL------

USE WISHLIST;

CREATE TABLE Usuario
(
	idUsuario INT PRIMARY KEY IDENTITY,
	Email varchar(200) UNIQUE Not null,
	Senha Varchar(100) NOT NULL,
);
GO

CREATE TABLE Desejos
(
	idDesejo INT PRIMARY KEY IDENTITY,
	IdUsuario int foreign key references Usuario(IdUsuario),
	titulo    VARCHAR(250)NOT NULL,
	descricao VARCHAR(250)NOT NULL,
	DataDesejo DATE NOT NULL,
);
GO
