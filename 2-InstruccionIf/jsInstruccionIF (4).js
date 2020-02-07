function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;
//parseo la variable edad
edad = parseInt(edad);

if(edad <= 17 && edad >= 13){

	alert("Sos un adolescente.");

}else{

	alert("No sos adolescente.");
}


}//FIN DE LA FUNCIÓN