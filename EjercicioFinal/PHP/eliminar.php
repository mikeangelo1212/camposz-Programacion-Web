<?php
$id = $_POST['id'];
$hostname='localhost';
$database='l19100154';
$username='root';
$password='';
$port='3306';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}


try{
    
    $consultaSql = "delete from Pedido where idPedido=" .$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al eliminar";
    echo $e->getMessage();

}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>