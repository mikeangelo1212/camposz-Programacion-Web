$(document).ready(function() {

    $('#btnjson').click(function() {
        $.post('BotonJson.php',{},function(data){

              console.log(data);
              $('#nombre').val(data.nombre);
              $('#correo').val(data.correo);
              $('#contrasena').val(data.contrasena);
              $('#dirCliente').val(data.dirCliente);
              $('#telCliente').val(data.telCliente);
              $('#ciudad').val(data.ciudad);
              $('#estado').val(data.estado);
              $('#pais').val(data.pais);

          },'json');
    });

});