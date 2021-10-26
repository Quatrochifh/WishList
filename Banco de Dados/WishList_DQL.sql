
-----DQL-----
USE WISHLIST
GO

SELECT * FROM Desejos;
SELECT * FROM Usuario;


Select Email,Senha,descricao,DataDesejo from Desejos
inner join Usuario
on Desejos.IdUsuario = Usuario.IdUsuario
GO