function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;
//parseo la variable edad
edad = parseInt(edad);

//pongo la condicion
if(edad < 13 || edad > 17){

	alert("No sos un adolescente.");
}

}//FIN DE LA FUNCIÓN