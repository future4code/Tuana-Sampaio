a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
    
    INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

resposta: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. O erro informa que há entrada duplicada para o id 002, as chaves primárias devem ser únicas.Cada item deve possuir um identificador único


Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

c. INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
Error Code: 1136. Column count doesn't match value count at row 1. Esse erro diz que a contagem de colunas não corresponde à contagem de valores na linha 1. Significa que o número de valores fornecidos na instrução INSERT é menor do que o número de colunas da tabela.

d.INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Error Code: 1364. Field 'name' doesn't have a default value. O erro significa que o campo está configurado como NotNull e não tem um valor para "name"inserido na tabela.

e.INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Faltou colocar a data entre aspas.



