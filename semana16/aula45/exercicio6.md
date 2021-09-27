Escreva uma query que:

a. Retorne o id, título e avaliação a partir de um id específico;

SELECT id, title, rating FROM Movies WHERE id = "006";

b. Retorne um filme a partir de um nome específico;

SELECT * FROM Movies WHERE title = "Cabras da peste";

c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

SELECT * FROM Movies WHERE rating >=7;