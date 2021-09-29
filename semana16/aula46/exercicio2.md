a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET 
    name = "Moacyr Franco"
    birth_date = "1979-08-23" 
WHERE id = "003"


b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c. Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET 
name = "André Lamoglia",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Ele não traz um erro, mas também não modifica nada;
