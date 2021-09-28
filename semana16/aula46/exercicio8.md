Escreva **uma** query que:

*a. Retorne todos os filmes em ordem alfabética*

    SELECT * FROM Movies order by Title ASC;

*b. Retorne os 5 primerios filmes em ordem descrente alfabética* 
    SELECT * FROM Movies order by Title DESC 
    LIMIT 5;

*c. Retorne os 3 filmes mais recentes em cartaz*
    SELECT * FROM Movies 
    WHERE release_date < CURDATE() ORDER BY release_date DESC 
    LIMIT 3;
    
*d. Retorne os 3 filmes melhor avaliados*
    SELECT * FROM Movies ORDER BY rating DESC 
    LIMIT 3;
