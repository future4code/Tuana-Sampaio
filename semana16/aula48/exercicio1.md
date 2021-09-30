a. Explique o que é uma chave estrangeira
resposta: É uma chave que referencia algum item de uma outra tabela externa.

b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movies_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movies_id)
VALUES(
	"003",
    "Bom filme para a família!",
    8,
    "002"
);

c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
resposta: ele dá o erro: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147856-tuana-fernandes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `Movies` (`id`))
Ele não consegue identificar um id para acrescentar a avaliação

d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movies DROP COLUMN rating;

e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

Rwsposta: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147856-tuana-fernandes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `Movies` (`id`))
 Devemos seguir uma lógica para apagar conteúdos das tabelas. Primeiro das tabelas filhas e assim por diante, pois se temos tabelas que possuem referências em outras, não temos como apagá-las.
