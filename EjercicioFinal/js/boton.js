    $(document).ready(function() 
{

      // $('#btnjson').click(function() {
      //     $.post('getRegistro.php',{},function(data){

      //           console.log(data);
      //           $('#idE').val(data.idE);
      //           $('#NombreCliente').val(data.NombreCliente);
      //           $('#idEmpaque').val(data.idEmpaque);
      //           $('#idPresentacion').val(data.idPresentacion);
      //           $('#costo').val(data.costo);
      //           $('#cantidad').val(data.cantidad);
      //           $('#sabor').val(data.sabor);
      //           $('#idEstado').val(data.idEstado);

      //       },'json');//ESTO NO ES IMPORTANTE NO LO TOMES EN CUENTA
      // });

      // $('#btnfetch').click(function(){
      //   fetch(".../PHP/getRegistro.php")
      //    .then( respuesta => respuesta.json() )
      //    .then( datos => console.log(datos) );

      // });
      
      $('#btnInsertar').click(function(){
        let Insertar = document.getElementById('nombreCliente').value;
        console.log("El elemento a INSERTAR es ".Insertar);
        let NombreCliente = document.getElementById('nombreCliente').value;
        let Empaque = document.getElementById('empaque').value;
        let TipoDePastel = document.getElementById('tipoDePastel').value;
        let Costo = document.getElementById('costo').value;
        let Cantidad = document.getElementById('cantidad').value;
        let Sabor = document.getElementById('sabor').value;
        let Fecha = document.getElementById('fecha').value;
        if( NombreCliente === "" || Empaque ==="" || TipoDePastel === "" || Costo === "" || Cantidad === "")
        {
          swal("Por favor  llene todos los datos ");
        }
        else
        {
        $.post('../PHP/insertar.php',
        {NOMBREC:NombreCliente,
          EMPAQUE:Empaque,
          TIPODEP:TipoDePastel,
          COSTO:Costo,
          CANTIDAD:Cantidad,
          SABOR:Sabor,
          FECHA:Fecha
        },function(data){
         refrescar(data);//El que esta entre asteriscos es el nombre con el que llegan al php *NOMBREC*:Nombre  
        },'json');
        }
        //limpiar();
      });

      $('#btnEditar').click(function(){
        let Test = document.getElementById('nombreCliente').value;
        console.log(Test);
        if(Test === "")
        {
          swal("Por favor haga una consulta de la que quiere actualizar");
        }
        else
        {
          let parid = document.getElementById('idPedido').value;
          console.log("El elemento a EDITAR es ".parid);
          let NombreCliente = document.getElementById('nombreCliente').value;
          let Empaque = document.getElementById('empaque').value;
          let TipoDePastel = document.getElementById('tipoDePastel').value;
          let Costo = document.getElementById('costo').value;
          let Cantidad = document.getElementById('cantidad').value;
          let Sabor = document.getElementById('sabor').value;
          let Fecha = document.getElementById('fecha').value;
        $.post('../PHP/editar.php',
        {
          par1:parid,
          NOMBREC:NombreCliente,
          EMPAQUE:Empaque,
          TIPODEP:TipoDePastel,
          COSTO:Costo,
          CANTIDAD:Cantidad,
          SABOR:Sabor,
          FECHA:Fecha
        },function(data){
         //refrescar(data);  
        },'json');
        }
        
    });

      //Este boton es pa consultar como su nombre dice
      $('#btnConsultar').click(function() {
        swal("Ingresa el ID a consultar: ",
        {
          content:"input",
        })
        .then((idX) => {
          console.log("El id a CONSULTAR es "+idX);
          $.post('../PHP/consultar.php',{id:idX},function(data)
          {
            refrescar(data);
          },'json');
        })
        // let idX=prompt("Teclee el ID a consultar"); 
       });

   
    $('#btnEliminar').click(function() {
      let Test = document.getElementById('idPedido').value;
        console.log(Test);
        if(Test === "")
        {
          swal("Por favor consulte el objeto a eliminar");
        }
        else
        {
          let idX = document.getElementById('idPedido').value;
          console.log("El elemento a ELIMINAR es ".idX);
          $.post('../PHP/eliminar.php',
        {
          id:idX
        },function(data){
         refrescar(data);  
        },'json');
        swal("Objeto eliminado correctamente");
        }
      limpiar();
     });

     function refrescar(objeto) 
     {
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
 
     $('#btnLimpiar').click(function() {
      console.log("Ya estamos limpiando")
      limpiar();
     });
     function limpiar(){
       document.getElementById('idPedido').value = "";
       document.getElementById('nombreCliente').value = "";
       document.getElementById('empaque').value = "";
       document.getElementById('tipoDePastel').value = "";
       document.getElementById('costo').value = "";
       document.getElementById('cantidad').value = "";
       document.getElementById('sabor').value = "";
       document.getElementById('fecha').value = "";
 
     }
 

      
});