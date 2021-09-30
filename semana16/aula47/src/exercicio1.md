a. Explique como é a resposta que temos quando usamos o raw. 
resposta: ele apresenta além do array que desejamos, outras informações das quais não necessitamos para o nosso objetivo.

b. Faça uma função que busque um ator pelo nome;

`const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
}`

c. Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

`const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raww(`
    SELECT COUNT(*) FROM Actor WHERE gender = = "${gender}"
    `)
    return result[0]
}`
