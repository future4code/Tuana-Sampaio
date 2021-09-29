
Exercício 4
app.post("/actor", async(req, res)=>{
    try{
        await connection.raw(`
        INSERT INTO Actor (name, salary, birth_date, gender)
        VALUES(
            "${req.body.name}",
             ${req.body.salary},
            "${req.body.birthDate}",
            "${req.body.gender}"
        );
        `)
        res.status(201).send("created")
    }catch (err) {
    res.status(400).send({
      message: err.message,
    });
    }
});

Crie um endpoint para cada uma das especificações abaixo:

- a.
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão

    app.put("/actor", async(req, res)=>{
    try{
        await connection("Actor")
        .UPDATE({
             ${req.body.salary},
        })
        .where({id:req.params.id})
        
        res.end()
    }catch (err) {
    res.status(400).send({
      message: err.message,
    });
    }
});

b.
- Deve ser um DELETE (`/actor/:id`)
- Receber id do ator como *path param*
- Simplesmente deletar o ator da tabela

app.delete("/actor/:id", async(req, res)=>{
    try{
        await connection("Actor")
        .delete()
        .where({
            id:req.params.id
        })
        res.status(204).end()
    }catch(erro){
        res.status(400).send({
        message: err.message,
    })
    }
});