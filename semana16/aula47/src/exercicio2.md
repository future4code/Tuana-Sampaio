a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

`const updateSalary = async(id: string, salary: number): Promise<any> => {
    await connection("Actor")
    .update({
        salary: salary,
    })
    .where({"id", id})
}; `

b. Uma função que receba um id e delete um ator da tabela

`const deleteActor = async(id: string): Promise<void> => {
    await connection("Actor")
    .delete()
    .where({"id", id})
}; `

c. Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

`const deleteActor = async(gender: string): Promise<any> => {
    await connection("Actor")
    .AVG("salary")
    .where({"gender", gender})

    return result[0]
}; `

