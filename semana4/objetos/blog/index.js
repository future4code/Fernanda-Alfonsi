
// essa função será executada assim que o usuário clicar no botão.
function criarPost(evento){
    const tituloPost = document.getElementById('titulo-post')
    const autorPost = document.getElementById('autor-post')
    const textoPost = document.getElementById('conteudo-post')

    const objetoPost = {
        titulo: `${tituloPost}`,
        autor: `${autorPost}`,
        conteudo: `${textoPost}`
    }
    
    let listaDeObjetos=[]
    if(evento.key ==='Enter'){
        listaDeObjetos.push(objetoPost)
    }

    console.log(tituloPost.value)
    console.log(autorPost.value)
    console.log(textoPost.value)
    console.log(objetoPost)
    console.log(listaDeObjetos)

}





// console.log(value)
// console.log(.value)
// console.log(post)
// console.log(post.autor)
// console.log(post.titulo)
// (editado) 

// const tituloPost = document.getElementById("titulo-post")
// const autorPost = document.getElementById("autor-post")
// const textoPost = document.getElementById("conteudo-post")