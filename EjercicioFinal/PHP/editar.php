<?php
$id = $_POST['par1'];
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
    
    $consultaSql = "update pedido set nombreCliente='$NombreC',empaque='$Empaque',tipoDePastel='$TipoDePastel',costo=$Costo,cantidad=$Cantidad, sabor='$Sabor',fecha ='$Fecha'where idPedido = $id;";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al editar";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>