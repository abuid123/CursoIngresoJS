function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var numeroRandom = Math.floor(Math.random()*(11-0))+0;

	if(numeroRandom >= 9){
		alert("Su nota es de: " + numeroRandom + " EXCELENTE");
	}	
	else if(numeroRandom >= 4 && numeroRandom < 9){
		alert("Su nota es de: " + numeroRandom + " APROBÓ");
	}
	else{
		alert("Su nota es de: " + numeroRandom + " Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN