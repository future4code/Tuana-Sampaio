a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

    ALTER TABLE Movies ADD playing_limit_date "2021-10-02";

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

    ALTER TABLE Movies CHANGE rating rating FLOAT;

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

UPDATE Movies
SET
	playing_limit_date = "2021-12-31"
WHERE id = "002";

    UPDATE Movies
SET
	playing_limit_date = "2000-01-01"
WHERE id = "003";



*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

DELETE FROM Movies WHERE id = "004";

UPDATE Movies
SET
	synopsis = "bananinha"
WHERE id = "004";

resposta:	UPDATE Movies SET  synopsis = "bananinha" WHERE id = "004"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.187 sec;

o valor aparentemente é atualizado, pois não dá erro na operação, porém nada é atualizado na tabela.
