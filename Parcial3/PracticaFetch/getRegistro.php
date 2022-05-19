<?php

$registro['idE']  ='19100154';//idEmpleado
$registro['NombreCliente'] ='Miguel';
$registro['idEmpaque']       ='Plastico';//idEmpaque
$registro['idPresentacion'] ='Pay';
$registro['costo'] ='100';
$registro['cantidad']     ='5';
$registro['sabor']     ='Fresa';
$registro['idEstado']       ='Bueno';

$registroJson = json_encode($registro);
echo $registroJson;
?>