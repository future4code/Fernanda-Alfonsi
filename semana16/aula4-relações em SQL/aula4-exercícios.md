
### Exercício 1
a) A  FOREIGN KEY é um modo de fazer uma ligação entre duas tabelas usando a PRIMARY KEY  como chave estrangeira para criar uma coluna de intersecção que relacionará estas tabelas.
b) 
```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```
```sql
INSERT INTO Rating VALUES
("m1", "Nescesário", "10", "001" ),
("m2", "Divertido e comovente", "10", "002" ),
("m3", "Clássico da literatura", "10", "003" ),
("m4", "Nescesário e Atual", "10", "004" );

```
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-fernanda-alfonsi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

REsposta: Ao criarmos uma avaliação para um filme com id inexistente acusa uma flga na FOREIGN KEY, pois a coluna movie_id é a que faz referencia e se liga com a coluna id da tabela moovie e precisa das referencias certas para fzer esta ligação.

```sql
INSERT INTO Rating VALUES
("m1", "Nescesário", "10", "0011" );
```


d) 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-fernanda-alfonsi`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Resposta: quando tentamos apagar uma linha que já está atrelada a outra tabela através de uma FOREIGN KEY não conseguimos.

```sql
DELETE FROM Movie WHERE id="001";
```
### Exercício 2

a) Esta é uma tabela interseccional, ou seja, pega informações de duas outras tabelas.Actor e movie e as relaciona através das primary keys delas. 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```
b) b. Crie, ao menos, 6 relações nessa tabela
```sql
SELECT * FROM MovieCast ;INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("004","003"),
("002", "008"),
("003","004"),
("001","006"),
("002","005"),
("001","002");
```
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-fernanda-alfonsi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Resposta: Por não existir um id anteriormente ralacionado nas tabelas ligadas através da FOREIGN KEY com a tabela MovieCast, o id não pode ser adicionado pois nesta relação a tabela é criada a partir de informações pré existentes em outras tabelas. 
```sql
NSERT INTO MovieCast(movie_id, actor_id)
VALUES
("005","003");
```
d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-fernanda-alfonsi`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Resposta: quando tentamos apagar uma linha pai que já está atrelada a outra tabela através de uma FOREIGN KEY  não conseguimos porque alteraria outras tabelas e relações prejudicando o funcionamento da aplicação.
```sql
DELETE FROM Actor WHERE id="003";
```
### Exercício 3

a)Resposta: A Query retorna uma junção das tabelas Movie e Rating, pelos dados que possuem correspondencia nas duas tabelas.O operador ON serve para organizar a tabela criada para que os dados não venham repetidos, apenas as linhas relacionadas. 

b)  
```sql
SELECT Movie.title, Movie.id, Rating.rate FROM Movie 
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;
```

### Exercício 4

a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
```sql
SELECT Movie.title, Movie.id, Rating.rate, Rating.comment FROM Movie 
LEFT JOIN Rating 
ON Movie.id = Rating.movie_id;
```
b)
```sql
SELECT Movie.id as Id_movies, Movie.title, MovieCast.actor_id FROM MovieCast
left JOIN Movie  ON MovieCast.movie_id = Movie.id;
```
c)
```sql
SELECT AVG (Rating.rate) as average, Movie.title, Movie.id FROM Movie
left JOIN Rating  
ON  Movie.id = Rating.movie_id 
GROUP BY (Movie.id);
```

### Exercício 5
a) 
Esta query junta três tabelas dando foco na tabela de filmes, o que quer dizer que todo filme aparecerá se tiver um ator atrelado a ele na tabela MovieCast, porém, nem todo ator itá aparecer se não tiver atrelado à MovieCast.
Usamos dois JOINS pois temos que atrelar duas tabelas por JOIN, como temos 3 Tabelas e uma é a que atrela os ids da Tabela de Movies e Actor, temos que usar dois JOINS.


b)
```sql
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name 
FROM Movie m
JOIN MovieCast mc 
ON m.id = mc.movie_id
RIGHT JOIN Actor a 
ON a.id = mc.actor_id;
```
c) -  A query  não rodou como deveria, pois no campo de busca do Select ao invés de estar m.title, estám,title, o que faz o sql interpretar m como uma coluna da tabela. 



*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*