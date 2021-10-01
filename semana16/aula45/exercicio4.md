SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

a. Explique com as suas palavras a query acima
resposta: A query acima consulta todos os atores que iniciam o nome com a letra A ou com J e possuam um salário maior do que 300,000;

b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%") 

d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%a%" OR name LIKE "%A%")AND salary BETWEEN 350000 AND 900000;
