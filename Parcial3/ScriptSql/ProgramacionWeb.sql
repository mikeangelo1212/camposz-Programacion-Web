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

insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Miguel',		'Plastico','Pastel',	500,	2,'Fresa',	'Bueno');
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Isabel',		'Carton','Pay',	200,	2,'Calabaza',	'Bueno'); 
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Carla',		'Plastico','Pastel',	500,	2,'Chocolate',	'Bueno'); 
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Victor',		'Carton','Pastel',	200,	1,'Red Velvet',	'Bueno'); 
select * from pedido;

select * from pedido where idEmpleado=2 ;