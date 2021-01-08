let fs = require('fs');

fs.appendFile("./tarefa.txt",  `${process.argv[2]},\n`,  function (err) {
  if (err) throw err;

  console.log('Tarefa adicionada!');

});

fs.readFile("./tarefa.txt", function(err, file) {
    console.log('Tarefas:\n' + file.toString());
  });