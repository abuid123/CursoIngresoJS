function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;
//parseo la variable edad
edad = parseInt(edad);

if(edad <= 17 && edad >= 13){

	alert("Sos un adolescente.");

}else if(edad >=18){

	alert("Sos mayor de edad.");
}else{
	alert("Sos un niño.");
}



}//FIN DE LA FUNCIÓN