// Parte A
// Para gerar um arquivo .js depois de termos acesso ao comando tsc, basta ir até a pasta en que está o arquivo pelo terminal e aí digitar o comando tsc index.ts, dessa maneira será criado uma copias .js do documento index.ts.

// ...................................................................................................................
// Parte B
// Caso o arquivo indexedDB.ts estivesse dentro de uma pasta chamada src, o arquivo index.js seria criado dentro de uma pasta chamada build  e o proceso seria um pouco diferente, ao inves de digitar tsc index.ts, bastaria ir até a pasta correta e digitar tsc que já seriam criadas tanto o arquivi index.js como o index.js.map

// .......................................................................................................................
// Parte C

// Podemos dar o comando tsc arquivo1.ts arquivo2.ts arquivo3.ts cada arquivo separados por espaços ou  apenas dar o camondo tsc na pasta que está os arquivos .ts que ele fará cópia de todos os arquivos com esta estenção para a extenção .js.

// .......................................................................................................................
// Parte D
// O que mudou:
// "target": "es5 para "target": "es6

// "forceConsistentCasingInFileNames": true  esta habilitado, mas não sei o que le faz, além da mudnça ele me chamou atenção também.