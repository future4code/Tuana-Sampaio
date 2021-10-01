a. Escreva uma query que retorne todas as informações das atrizes

resposta: SELECT * from Actor WHERE gender = "female"

b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos

resposta: SELECT salary, name from Actor WHERE name = "tony ramos"

c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

resposta: Retorna todos os valores null, pois não há nenhum campo com esse valor.

d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

resposta: SELECT id, name, salary from Actor WHERE salary>500000;

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

resposta: Error Code: 1054. Unknown column 'nome' in 'field list'. Esse erro indica que esta coluna é desconhecida. Resposta correta: SELECT id, name from Actor WHERE id = "002";
