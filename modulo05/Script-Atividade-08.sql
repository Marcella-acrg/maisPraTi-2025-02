create table comanda (
id_comanda INT primary key not null, 
data DATE not null, 
nr_mesa INT not NULL, 
nome_cliente VARCHAR(100) not null
);

create table cardapio (
id_cardapio INT primary key not null,
nome_item VARCHAR(100) unique not null,
descricao TEXT,
preco_unitario DECIMAL (10, 2) not null 
);

create table item_comanda (
id_item_comanda INT primary key not null, 
quantidade INT not null,
id_comanda INT not null,
id_cardapio INT not null,
foreign key(id_comanda) references comanda(id_comanda),
foreign key(id_cardapio) references cardapio(id_cardapio)
);

insert into cardapio (id_cardapio, nome_item, descricao, preco_unitario)
values (6, 'Torrada','Mortadela e queijo', 12.00),
(7, 'Coxinha','Frangoo', 15.00),
(8, 'Pastel','Mortadela e queijo', 12.00),
(9, 'Bolo','Cenoura com chocolate', 50.00),
(10, 'Torta','Espinafre', 18.00)

select * from cardapio;

insert into comanda (id_comanda, data, nr_mesa, nome_cliente)
values (6, '2025-10-12', 10, 'Bruce Wayne'),
(7, '2025-10-15', 10, 'Lex Luthor'),
(8, '2025-05-12', 11, 'Mulher Maravilha'),
(9, '2025-01-01', 11, 'Coringa'),
(10, '2025-10-01', 12, 'Superman')

select * from comanda;

insert into item_comanda(id_item_comanda, quantidade, id_comanda, id_cardapio)
values (6, 2, 6, 9),
(7, 34, 9, 9),
(8, 1, 10, 9),
(9, 2, 7, 9),
(10, 4, 7, 9),
(11, 1, 6, 6), 
(12, 2, 6, 7),  
(13, 1, 7, 6),  
(14, 1, 7, 8) 

select * from item_comanda

-- Exercício 01 - Faça uma listagem do cardápio ordenada por nome;
select * from cardapio order by nome_item asc


-- Exercício 02 - Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda 
-- (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) 
-- destas ordenados data e código da comanda e, também o nome do café;
select c.id_comanda, ic.id_item_comanda, c.nome_cliente, ic.id_cardapio, card.nome_item from comanda c
inner join item_comanda ic on c.id_comanda = ic.id_comanda
inner join cardapio card on ic.id_cardapio = card.id_cardapio
order by c.data, c.id_comanda, card.nome_item


-- Exercício 03 - Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor 
-- total da comanda. Ordene por data esta listagem;
select c.id_comanda, c.data, c.nr_mesa, c.nome_cliente, SUM(ic.quantidade * card.preco_unitario) AS valor_total from comanda c 
inner join item_comanda ic on c.id_comanda = ic.id_comanda
inner join cardapio card on ic.id_cardapio = card.id_cardapio
group by c.id_comanda, c.data, c.nr_mesa, c.nome_cliente
order by c.data;


-- Exercício 04 - Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que 
-- possuem mais do que um tipo de café na comanda;
SELECT c.id_comanda, c.data, c.nr_mesa, c.nome_cliente, COUNT(DISTINCT ic.id_cardapio) AS qtd_itens, 
SUM(ic.quantidade * card.preco_unitario) AS valor_total FROM comanda c
INNER JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
INNER JOIN cardapio card ON ic.id_cardapio = card.id_cardapio
GROUP BY c.id_comanda, c.data, c.nr_mesa, c.nome_cliente
HAVING COUNT(DISTINCT ic.id_cardapio) > 1
ORDER BY c.data;


-- Exercício 05 - Qual o total de faturamento por data? ordene por data esta consulta.
SELECT c.data, SUM(ic.quantidade * card.preco_unitario) AS faturamento_total FROM comanda c
INNER JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
INNER JOIN cardapio card ON ic.id_cardapio = card.id_cardapio
GROUP BY c.data
ORDER BY c.data;



