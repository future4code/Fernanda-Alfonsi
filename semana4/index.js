function criarTarefa(){
    const inputTarefas = document.getElementById("tarefa").value
    const escolherDia = document.getElementById("dias-semana").value
    const listaTarefas = document.getElementById(escolherDia)

   
    if(inputTarefas.value !== ""){
        listaTarefas.innerHTML += `<li onclick = "riscaTarefa(this)"> ${inputTarefas}</li>`

        document.getElementById("tarefas").value = ""
        
    }else{
        alert("Insira uma tarefa válida")
        
    }

    
}


function riscaTarefa(li){
      
    li.style.color = "red";
    li.style.textDecoration = "line-through";
}

