// Parte A
// As entradas são os numeros( o que você envia para a função )  e as saidas são as estatísticas no return ( o que recebemos da função)

// Parte B
// as variáveis são: numerosOrdenados (que é do tipo array de numeros) estatisticas (que é do tipo objeto) soma (que é do tipo number)
function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// Parte C
type amostraDeDados={
    numeros:number[],
    obterEstatisticas:(numeros:number) => estatisticas
}

type estatisticas = {
    maior: number,
    menor: number,
    media: number
}
