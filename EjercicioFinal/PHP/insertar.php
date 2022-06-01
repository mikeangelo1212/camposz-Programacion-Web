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

//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);

try{
    //FALTA PERSONALIZAR QUERY
    $consultaSql = "insert into Pedido (nombreCliente,empaque,    tipoDePastel,  costo,     cantidad, sabor,     fecha) 
                                values ('$NombreC',	  '$Empaque','$TipoDePastel',$Costo,	$Cantidad,'$Sabor',	'$Fecha');";
    //"insert into n19100190.jugadores (NombreCom,NombreDelJuego,Rango,Edad,Pais) values('$NombreC','$NombreJ','$Rango',$Edad,'$Pais');" ;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error de la consulta";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>