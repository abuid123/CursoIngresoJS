function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;
//parseo la variable edad
edad = parseInt(edad);

if(edad >= 18){

	alert("Sos mayor de edad.");

}else{

	alert("Sos menor de edad.");
}

}//FIN DE LA FUNCIÓN