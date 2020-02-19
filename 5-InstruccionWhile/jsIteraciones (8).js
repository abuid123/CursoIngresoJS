function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta != "no")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		respuesta = prompt("¿Quiere seguir ingresando numeros?");

		if(numeroIngresado > 0)
		{
			positivo = positivo + numeroIngresado;
		}
		if(numeroIngresado < 0)
		{
			negativo = negativo*numeroIngresado;
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN