function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad = document.getElementById('edad').value;
//parseo la variable edad
edad = parseInt(edad);

estadoCivil = document.getElementById('estadoCivil').value;

if(edad >= 18 && estadoCivil == "Soltero"){

	alert('Es soltero y no es menor.');

	
}

}//FIN DE LA FUNCIÓN