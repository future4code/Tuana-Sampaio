Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a.ALTER TABLE Actor DROP COLUMN salary;
    resposta: alterar a tabela e apagagando a coluna salary

b.ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
    resposta: alterar a tabela trocando o nome gender por sex

c.ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
    resposta: alterar a tabela modificando a quantidade de caracteres mostrada

d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

    resposta: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);