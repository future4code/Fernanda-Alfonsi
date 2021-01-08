const argumento1 = Number( process.argv[3])
const argumento2 = Number( process.argv[4])

switch (process.argv[2]) {
    case "add": 
    const add = (argumento1+argumento2)
    console.log("Resposta:",add)
        break;

    case "sub": 
    const sub = (argumento1-argumento2)
    console.log("Resposta:",sub)
        break;

    case "mult": 
    const mult = (argumento1*argumento2)
    console.log("Resposta:",mult)
        break;

    case "div": 
    const div = (argumento1/argumento2)
    console.log("Resposta:",div)
        break;

    default: console.log("Deu Ruin")
        break;
}