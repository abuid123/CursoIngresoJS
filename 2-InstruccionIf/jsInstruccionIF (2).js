function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

//parseo el valor de edad
edad = parseInt(edad);

if(edad >= 18){
	alert("Sos mayor de edad");
}

}//FIN DE LA FUNCIÓN