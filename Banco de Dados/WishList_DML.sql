

------DML------

USE WISHLIST;

INSERT INTO Usuario (Email,Senha)
VALUES              ('amd@adm.gmail.com', 'administrador'),('usuario@usuario.gmail.com', 'usuario123');
GO

INSERT INTO Desejos (IdUsuario, titulo, descricao, DataDesejo)
VALUES              (2,'Emprego','Ter um emprego legal!', '02/06/2021');
GO
 

 