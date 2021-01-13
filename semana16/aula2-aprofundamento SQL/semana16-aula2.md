
# Exrcícios 1
Os comandos que começam com ALTER TABLE, alteram uma tabela. 

### Parte A

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

Resposta : O comando "DROP COLUMN" serve para remover a coluna "salary" da tabela  Actor.

### Parte B

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Resposta : O comando "CHANGE" serve para modificar uma coluna da tabela, neste caso muda o nome da coluna de "gender para "sex" sem alterar a tipagem "VARCHAR(6)".

### Parte C

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Resposta : O comando "CHANGE" serve para modificar uma coluna da tabela, neste caso muda  o numero de caracteres da tipagem de "VARCHAR(6)" para "VARCHAR(255)" sem mudar o nome da coluna.

### Parte D

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

Alterado na tabela no MySQL.

# Exrcícios 2
### Parte A

```sql
UPDATE Actor 
SET name = "Sonia Braga", birth_date = "1950-06-08"
WHERE id = "003";
```
### Parte B

Para  fazer esta modificação tive que rodar antes o comando 
```sql
SET SQL_SAFE_UPDATES = 0;
```

```sql
UPDATE Actor 
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

Para  refazer a tabela como era antes tive que rodar antes novamente  o comando 
```sql
SET SQL_SAFE_UPDATES = 0;
```
```sql
UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

### Parte C

```sql
UPDATE Actor 
SET name = "Silvero Pereira", 
salary = 500000, 
birth_date = "1982-06-20", 
gender = "male", 
type = "Director"
WHERE id = "003";
```

### Parte D
Ao usar o camando abaixo com um id inexistente, o SQL não deu erro, porém não alterou nenhuma linha. 

```sql
UPDATE Actor 
SET name = "Silvero Pereira", 
WHERE id = "0011";
```
0 linha (s) afetada (s) Linhas correspondidas: 0 Alterado: 0 Avisos: 0

# Exrcícios 3
### Parte A

Para  fazer esta Deleção tive que rodar antes o comando 
```sql
SET SQL_SAFE_UPDATES = 0;
```
e depois
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### Parte B
Para  fazer esta Deleção tive que rodar antes o comando 
```sql
SET SQL_SAFE_UPDATES = 0;
```
e depois
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

# Exrcícios 4
### Parte A
```sql
SELECT MAX(salary) FROM Actor
```
### Parte B
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
### Parte C
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
 ```
### Parte D
```sql
SELECT SUM(salary) FROM Actor
```

# Exrcícios 5
### Parte A
O comando abaixo conta a quantidade de vezez em que "gender" é preenchida na tabela "Actor" COUNT(*) e o comamando GROUP BY agrupa os generos diferentes dentro desta tabela, assim sendo a query abaixo devolve uma tabela que  com 4 male e 3 female
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
### Parte B
```sql
SELECT id,name FROM Actor
ORDER BY name ASC;
```
### Parte C
```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```
### Parte D
```sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
### Parte E
```sql
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;
```


# Exrcícios 6

### Parte A
```sql
ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);
```
### Parte B
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```
### Parte c
```sql
UPDATE Movie
SET	playing_limit_date = "2021-01-31"
WHERE id = "004";
```
```sql
UPDATE Movie
SET	playing_limit_date = "2017-02-09"
WHERE id = "003";
```
### Parte D
```sql
DELETE FROM Movie WHERE id = "001";
```
```sql
UPDATE Movie
SET	synopsis = "A pernambucana Val se mudou para São Paulo com o intuito de proporcionar melhores condições de vida para a filha, Jéssica. Anos depois, a garota lhe telefona, dizendo que quer ir para a cidade prestar vestibular. "
WHERE id = "001";
```
Resposta: Ao usar o camando abaixo com um id inexistente, o SQL não deu erro, porém não alterou nenhuma linha.


# Exrcícios 7
a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
Resposta: 3


b. Qual a média das avaliações dos filmes?
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
Resposta: 9.333333333333334


*c. Qual a quantidade de filmes em cartaz?*
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
Resposta: 1


*d. Qual a quantidade de filmes que ainda irão lançar?*
```sql
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
Resposta: 0


*e. Qual a maior nota dos filmes?*
```sql
SELECT MAX(rating) FROM Movie;
```
Resposta: 10


*f. Qual a menor nota dos filmes?*
```sql
SELECT MAX(rating) FROM Movie;
```
Resposta: 8


# Exrcícios 8

a. Retorne todos os filmes em ordem alfabética

```sql
SELECT * FROM Movie ORDER BY title;
```

b. Retorne os 5 primerios filmes em ordem descrente alfabética
```sql
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

c. Retorne os 3 filmes mais recentes em cartaz
```sql
SELECT * FROM Movie 
WHERE playing_limit_date > CURDATE() 
ORDER BY playing_limit_date DESC 
LIMIT 3;
```

d. Retorne os 3 filmes melhor avalidos
```sql
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```