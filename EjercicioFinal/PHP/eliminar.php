<?php
$idEmpleado=$_POST['id'];
//$iduser=1;
$hostname='localhost';
$database='l19100154';
$username='root';
$password='';
$port='3306';

//echo $iduser;
try {
    //$con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}


try {
$consultaSql = "delete from pedido where idPedido=".$idEmpleado;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
//$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

//echo json_encode($resultado);
?>
