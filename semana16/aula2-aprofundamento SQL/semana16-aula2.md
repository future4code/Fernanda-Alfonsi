
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