$(document).ready(function() {

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

   
});

// document.getElementById("btnfetch").addEventListener(click,function(){
          
//     let promesa = fetch('getRegistro.php');
    
//     promesa.then(respuesta => respuesta.json())
//            .then (datos => console.log(datos));
// });

