
a. Crie um endpoint com as especificações acima

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("Actor)
        .get()
        .where({
            id: req.params.id
        })
    
    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

b. Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

app.get(`/actor?gender=`, async (req: Request, res: Response) => {
  try {
    await connection("Actor)
        .get({
            gender: req.body.gender
        })
        
    
    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});