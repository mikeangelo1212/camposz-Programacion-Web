create database [19100154]; 
use [19100154];

create table Pedido
(
idEmpleado smallint not null IDENTITY(1,1) PRIMARY KEY,
nombreCliente varchar(30), 
idEmpaque varchar(30), /*Charola de plastico, caja y asi*/
idPresentacion varchar(30), /*Si es pay o pastel*/
costo float, 
cantidad int, 
sabor varchar(32),
idEstado varchar(12),/*si esta bueno el pastel para comerse*/
);

insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Miguel',		'Plastico','Pastel',	500,	2,'Fresa',	'Bueno');
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Isabel',		'Carton','Pay',	200,	2,'Calabaza',	'Bueno'); 
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Carla',		'Plastico','Pastel',	500,	2,'Chocolate',	'Bueno'); 
insert into Pedido (nombreCliente,idEmpaque,idPresentacion,costo,cantidad,sabor,idEstado) 
			values ('Victor',		'Carton','Pastel',	200,	1,'Red Velvet',	'Bueno'); 
select *from pedido;

