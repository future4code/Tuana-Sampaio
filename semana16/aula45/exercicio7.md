Escreva uma query que:

a. Retorna um filme cujo título contenha a palavra `vida`

SELECT * FROM Movies WHERE title LIKE "%vida%";

b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

SELECT * FROM Movies
WHERE title LIKE "%cabra%" OR
      synopsis LIKE "%marido%";

c. Procure por todos os filmes que já tenham lançado

SELECT * FROM Movies
WHERE release_date > 2019-09-27;

d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

SELECT * FROM Movies
WHERE release_date > 2019-09-27 AND title LIKE "%cabra%" OR
      synopsis LIKE "%marido%" AND rating >7;