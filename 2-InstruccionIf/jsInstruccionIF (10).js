function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom = Math.floor(Math.random()*10)+1;

	if(numeroRandom < 4){
		alert("La nota es: "+numeroRandom +" Vamos, la proxima se puede");
	}else
	{
		if(numeroRandom >8){
			alert("La nota es: "+numeroRandom +" Excelente.");
		}else
		{
			alert("La nota es: "+numeroRandom +" APROBO.");
		}
	}

}//FIN DE LA FUNCIÓN