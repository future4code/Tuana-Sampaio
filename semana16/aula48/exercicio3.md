SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

a. Explique, com suas palavras, a query acima. O que é o operador ON?
resposta: selecionar tudo da tabela movie, adicionar os dados da tabela rating no id do movie e equiparando ao id da tabela rating.

b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

