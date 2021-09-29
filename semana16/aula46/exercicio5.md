a. Releia a última query. Teste-a. Explique o resultado com as suas palavras

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

resposta: Esta query agrupa a quantidade dos dados selecionados em grupos. No caso vai mostrar a quantidade total de pessoas do gênero feminino e do gênero masculindo separadamente em seus respectivos grupos.

b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

SELECT id, name FROM Actor
ORDER BY name DESC;

c. Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary ASC;

d. Faça uma query que retorne os atores com os três maiores salarios

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e. Faça uma query que retorne a média de salário por gênero

SELECT AVG(salary) FROM Actor GROUP BY gender;