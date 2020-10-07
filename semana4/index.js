function criarTarefa(){
    const inputTarefas = document.getElementById("tarefa").value
    const escolherDia = document.getElementById("dias-semana").value
    const listaTarefas = document.getElementById(escolherDia)

   
    if(inputTarefas !== ""){
        listaTarefas.innerHTML += `<li onclick = "riscaTarefa(this)">${inputTarefas}</li>`
        document.getElementById("tarefa").value = " "
        
    }else{

        alert(" Ei você! Insira uma tarefa válida")
        
    }
    
}


function riscaTarefa(li){
      
    li.style.color = "red";
    li.style.textDecoration = "line-through";
}

