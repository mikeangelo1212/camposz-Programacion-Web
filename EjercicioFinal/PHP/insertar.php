<?php
$NombreC = $_POST['NOMBREC'];
$Empaque = $_POST['EMPAQUE'];
$TipoDePastel = $_POST['TIPODEP'];
$Costo = $_POST['COSTO'];
$Cantidad = $_POST['CANTIDAD'];
$Sabor = $_POST['SABOR'];
$Fecha = $_POST['FECHA'];
$hostname='localhost';
$database='l19100154';
$username='root';
$password='';
$port='3306';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}


try{
    //FALTA PERSONALIZAR QUERY
    $consultaSql = "insert into Pedido (nombreCliente,empaque,    tipoDePastel,  costo,     cantidad, sabor,     fecha) 
                                values ('$NombreC',	  '$Empaque','$TipoDePastel',$Costo,	$Cantidad,'$Sabor',	'$Fecha');";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al insertar";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>