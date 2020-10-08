
// esta nova array "listaDEObjetos" recebera os objetos criados a cada publicação do usuário.
let listaDeObjetos=[]
// essa função será executada assim que o usuário clicar no botão "criar post".
function criarPost(evento){
    const tituloPost = document.getElementById('titulo-post') //captura  título no HTML
    const autorPost = document.getElementById('autor-post')//captura autor no HTML
    const textoPost = document.getElementById('conteudo-post')//captura os elementos do texto no HTML
    const imagemPost = document.getElementById('Imagem-post')//captura os elementos da imagem no HTML
        const objetoPost = { //guarda as informações no input neste objeto
            titulo: tituloPost.value,
            autor: autorPost.value,
            conteudo: textoPost.value
        }

    listaDeObjetos.push(objetoPost) //insere as informações do objeto numa array.
    
    insereDados() //função que insere dados no documento HTML
    
    tituloPost.value = "" //apaga os dados do usuário depois de inseridos na página HTML
    autorPost.value = ""
    textoPost.value = ""
    imagemPost.value = ""

    
 
    console.log(objetoPost)
    console.log(listaDeObjetos)

}

// Essa função é responsável por inserir o conteudo digitado pelo usuário na página.
function insereDados(){

    const tituloPost = document.getElementById('titulo-post')
    const autorPost = document.getElementById('autor-post')
    const textoPost = document.getElementById('conteudo-post')
    const imagemPost = document.getElementById('Imagem-post')

    const containerPost = document.getElementById('container-de-posts')
    containerPost.innerHTML+= `<h1> ${tituloPost.value}</h1>`
    containerPost.innerHTML+= `<h3> ${autorPost.value}</h3>`
    containerPost.innerHTML+= `<p> ${textoPost.value}</p>`
    containerPost.innerHTML+= `<img src= "${imagemPost.value}">`
}
