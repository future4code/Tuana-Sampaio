a. Escreva uma query que pegue o maior salário de todos os atores e atrizes

SELECT MAX(salary) FROM Actor;

b. Escreva uma query que pegue o menor salário das atrizes

SELECT MIN(salary) FROM Actor WHERE gender = "female";

c. Escreva uma query que pegue a quantidade de atrizes

SELECT COUNT(*) FROM Actor WHERE gender = "female";


d. Escreva uma query que pegue a soma de todos os salários

SELECT SUM(salary) FROM Actor;