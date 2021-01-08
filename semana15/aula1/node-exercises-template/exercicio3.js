let fs = require('fs');
// const tarefas = []

// tarefas.push(process.argv[2])

//append content at the end of the file:
fs.appendFile("./tarefa.txt",  `${process.argv[2]},\n`,  function (err) {
  if (err) throw err;

  console.log('Tarefa adicionada!');

});

fs.readFile("./tarefa.txt", function(err, file) {
    console.log('Tarefas:\n' + file.toString());
  });