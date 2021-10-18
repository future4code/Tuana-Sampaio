a. Explique o código acima com as suas palavras.
    r- criacção de uma tabela de usuários inserindo id, email, password;

b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

r - CREATE TABLE IF NOT EXISTS to_do_list_users (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      nickname VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL
   );

c. Pela mesma justificativa do exercício anterior, crie uma função responsável por salvar usuários no banco.