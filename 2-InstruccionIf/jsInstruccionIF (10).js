function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom = Math.floor(Math.random()*(11-0))+0;

	if(numeroRandom < 4){
		alert("La nota es: "+numeroRandom +" Vamos, la proxima se puede");
	}else
	{
		if(numeroRandom > 3 && numeroRandom < 9){
			alert("La nota es: "+numeroRandom +" APROBO");
		}else
		{
			alert("La nota es: "+numeroRandom +" Excelente.");
		}
	}

}//FIN DE LA FUNCIÓN