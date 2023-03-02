function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="elvictor" && pass=="1234"){
    alert("Usuario y contraseña validos");
    window.location="CALCULADORA.HTML";
    
} else {
    alert("Intenta de Nuevo");
}
} 


