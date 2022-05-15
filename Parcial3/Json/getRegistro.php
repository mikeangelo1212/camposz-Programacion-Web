<?php

$registro['idE']  ='123';
$registro['NombreProducto'] ='Gerardo';
$registro['idP']       ='PC';
$registro['idPresentacion'] ='XBOX';
$registro['costo'] ='100';
$registro['cantidad']     ='10';
$registro['idC']     ='TEEN';
$registro['idEstado']       ='Nuevo';

$registroJson = json_encode($registro);
echo $registroJson;
?>