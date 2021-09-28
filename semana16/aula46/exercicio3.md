a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

    DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
    