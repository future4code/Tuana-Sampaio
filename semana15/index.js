    const{green, red, yellow}= require("chalk")

    let input1 = process.argv[2]
    let input2 = process.argv[3]

    const operacao = process.argv[4]
    switch(operacao){
        case "soma":
            console.log(green('Resposta:', (input1) + (input2)))
        break;
        case "sub":
            console.log(red('Resposta:', (input2) - (input1)))
        break;
        case "mult":
            console.log(yellow('Resposta:', (input1)*(input2)))
        break;
        case "div":
            console.log(green('Resposta:',(input1)/(input2)))
        break;
        default:
            console.log(`Sorry, we are out of ${operacao}.`);
    }
    
    