    $(document).ready(function() {

      $('#btnjson').click(function() {
          $.post('getRegistro.php',{},function(data){

                console.log(data);
                $('#idE').val(data.idE);
                $('#NombreProducto').val(data.NombreProducto);
                $('#idP').val(data.idP);
                $('#idPresentacion').val(data.idPresentacion);
                $('#costo').val(data.costo);
                $('#cantidad').val(data.cantidad);
                $('#idC').val(data.idC);
                $('#idEstado').val(data.idEstado);

            },'json');
      });
});