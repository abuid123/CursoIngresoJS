function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while(numero > 9){
		alert("El numero es erroneo, por favor introduzcalo de nuevo");
		numero = prompt("ingrese un número entre 0 y 9.");
	}

	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN