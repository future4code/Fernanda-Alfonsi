function criarTarefa(){
    const inputTarefas = document.getElementById("tarefa").value
    const escolherDia = document.getElementById("dias-semana").value
    const listaTarefas = document.getElementById(escolherDia)

   
    if(inputTarefas.value !== ""){
        listaTarefas.innerHTML += `<li>${inputTarefas}</li>`
        inputTarefas.value = " "
        
    }else{
        alert("Insira uma tarefa válida")
        
    }

    
}




