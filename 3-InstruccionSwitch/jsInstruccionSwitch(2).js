function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
	case "Septiembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;

	case "Octubre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;

	case "Noviembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;

	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;	
	case "Julio":
		alert("Abrigate que hace frio.");
		break;	
	case "Agosto":
		alert("Abrigate que hace frio.");
		break;		

	default:
		alert("Falta para el invierno");										
}
}//FIN DE LA FUNCIÓN