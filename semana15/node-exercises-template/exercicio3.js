let fs = require('fs');


const tarefas = []

// tarefas.push(process.argv[2])


// const novaTarefa = require('novaTarefa');

//append content at the end of the file:
fs.appendFile(tarefas,  process.argv[2],  function (err) {
  if (err) throw err;
//   tarefas.push(process.argv[2])
  console.log('Tarefa adicionada!');

});

console.log("Novas Tarefas:",tarefas)