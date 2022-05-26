    $(document).ready(function() 
{

      $('#btnjson').click(function() {
          $.post('getRegistro.php',{},function(data){

                console.log(data);
                $('#idE').val(data.idE);
                $('#NombreCliente').val(data.NombreCliente);
                $('#idEmpaque').val(data.idEmpaque);
                $('#idPresentacion').val(data.idPresentacion);
                $('#costo').val(data.costo);
                $('#cantidad').val(data.cantidad);
                $('#sabor').val(data.sabor);
                $('#idEstado').val(data.idEstado);

            },'json');
      });

      $('#btnfetch').click(function(){
        fetch("getRegistro.php")
         .then( respuesta => respuesta.json() )
         .then( datos => console.log(datos) );

      });
      
      
      //Este boton es pa 
      $('#btnConsultar').click(function() {
        let idX=prompt("Teclee el ID a consultar");
        console.log("El id introducido es "+idX);
        $.post('consultar.php',{id:idX},function(data)
        {
          refrescar(data);
        },'json');
       });

    function refrescar(objeto) {
        console.log(objeto);
        $('#idPedido').val(objeto.idPedido);
        $('#nombreCliente').val(objeto.nombreCliente);
        $('#empaque').val(objeto.empaque);
        $('#tipoDePastel').val(objeto.tipoDePastel);
        $('#costo').val(objeto.costo);
        $('#cantidad').val(objeto.cantidad);
        $('#sabor').val(objeto.sabor);
        $('#fecha').val(objeto.fecha);
  }

      
});