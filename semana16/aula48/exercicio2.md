CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

*a. Explique, com as suas palavras, essa tabela*
 resposta: tabela que cria o elenco com duas colunas, referenciadas nas tabelas de atores e de filmes que já foram criadas através da chave estrangeira.

 b. Crie, ao menos, 6 relações nessa tabela 

 CREATE TABLE Relational_MovieCast (
		movies_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query