/*a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    R- ocorre um erro pois número não é compatível com o type string.
    let minhaString: string = 23/*

    /*b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?*/
   
        /*let meuNumero: number | string = 23*/

        /*c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
        nome, que é uma string;
        idade, que é um número;
        corFavorita, que é uma string.*/

        /*type person = { 
            name: string, 
            age: number, 
            favoriteColor: string 
        } 
        
        const ana: person = {
            name: "Ana",
            age: 30,
            favoriteColor: "indigo"
        }
           
        const maria: person = {
            name: "Maria",
            age: 40,
            favoriteColor: "green"
        }
              
        const pedro: person = {
            name: "Pedro",
            age: 80,
            favoriteColor: "orange"
        }

/*d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.*/

        enum rainbowColors{
            RED = "red",
            ORANGE = "Orange", 
            YELLOW = "Yellow", 
            GREEN = "Green", 
            BLUE = "Blue", 
            INDIGO = "Indigo",
            VIOLET= "Violet"
        }
        type person = { 
            name: string, 
            age: number, 
            favoriteColor: string 
        } 
        
        const ana: person = {
            name: "Ana",
            age: 30,
            favoriteColor: rainbowColors.INDIGO
        }
           
        const maria: person = {
            name: "Maria",
            age: 40,
            favoriteColor: rainbowColors.GREEN
        }
              
        const pedro: person = {
            name: "Pedro",
            age: 80,
            favoriteColor: rainbowColors.BLUE
        }
