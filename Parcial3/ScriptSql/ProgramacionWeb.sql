create database L19100154; 
use l19100154;

create table Pedido
(
idPedido smallint not null AUTO_INCREMENT,
nombreCliente varchar(30), 
empaque varchar(30), /*Charola de plastico, caja y asi*/
tipoDePastel varchar(30), /*Si es pay o pastel*/
costo double(5,2), 
cantidad int, 
sabor varchar(32),
fecha varchar(12), /*si esta bueno el pastel para comerse*/
PRIMARY KEY (idPedido)
);

insert into Pedido (nombreCliente,empaque,tipoDePastel,costo,cantidad,sabor,fecha) 
			values ('Miguel',		'Plastico','Pastel',	500,	2,'Fresa',	'5-26-2022');
insert into Pedido (nombreCliente,empaque,tipoDePastel,costo,cantidad,sabor,fecha) 
			values ('Isabel',		'Carton','Pay',	200,	2,'Calabaza',	'5-26-2022'); 
insert into Pedido (nombreCliente,empaque,tipoDePastel,costo,cantidad,sabor,fecha) 
			values ('Carla',		'Plastico','Pastel',	500,	2,'Chocolate',	'5-26-2022'); 
insert into Pedido (nombreCliente,empaque,tipoDePastel,costo,cantidad,sabor,fecha) 
			values ('Victor',		'Carton','Pastel',	200,	1,'Red Velvet',	'5-26-2022'); 
select * from pedido;

select * from pedido where idEmpleado=2 ;