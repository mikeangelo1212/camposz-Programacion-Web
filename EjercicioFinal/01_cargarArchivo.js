
window.onload = function() {

document.getElementById("btnajax").addEventListener("click",pedirHeader);
document.getElementById("btnreset").addEventListener("click",iniciarHeader);


function pedirHeader() {

var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest

solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                            // cuando cambie el status del objeto XMLHttpRequest

    if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
        document.getElementById("divajax").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
}};

solicitud.open("GET", "Ajax.txt", true);
solicitud.send();

 }

function iniciarHeader() {
	document.getElementById("divajax").innerHTML = "<h2>Header de nivel 2</h2>"; 
}





} 

$('#AjaxPromise').click(function(){ 
    let promesa = new Promise(function(resolve,reject) {
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange = function(){
            if(solicitud.readyState == 4 && solicitud.status == 200){

                resolve(solicitud.response);
            }
        }
        solicitud.open("GET","Ajax.txt",true);
        solicitud.send();
    });

    promesa.then(function(value) {document.getElementById("Cabeza").innerHTML = value;});
});

