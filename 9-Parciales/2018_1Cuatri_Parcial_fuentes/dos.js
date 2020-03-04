/*De los movimientos de un banco necesito saber:
El nombre del cliente
La edad(Debe ser mayor de edad)
Sexo
Tipo de transaccion(Extraccion o deposito)
Importe(Validar que no sea negativo)

1) Promedio de edad
2) Nombre del mas joven
3) Cantidad de hombres = 3
4) Cantidad de mujeres = 1
5) Sexo del importe mas alto = f
6) Operacion mas utilizada = "Extraccion"
7) Importe del mas viejo = 2000
*/
function mostrar()
{
  	var nombreCliente;
  	var edad;
  	var sexo;
  	var tipoDeTransaccion;
  	var importe;
  	var edadSuma ;
  	var promedioDeEdad;
  	var respuesta ;
  	var contador;
  	var masJoven;
  	var nombreMasJoven;
  	var hombresSuma;
  	var mujeresSuma;
  	var importeMasAlto;
  	var operacionMasUtilizada;
  	var cantidadExtraccion;
  	var cantidadDeposito;
  	var masViejo;
  	var masViejoImporte;
  	var sexoImporteMasAlto;

  	cantidadDeposito = 0;
  	cantidadExtraccion = 0;
  	importeMasAlto = 0;
  	mujeresSuma = 0;
  	hombresSuma = 0;
  	edadSuma = 0;
  	respuesta = "S";
  	contador = 0;

  	while(respuesta == "S"){
	  	do
	  	{
	  		nombreCliente = prompt("Ingrese su nombre");
	  	}while(!isNaN(nombreCliente));
	  	do
	  	{
	  		edad = prompt("Que edad tiene?");
	  		edad = parseInt(edad);
	  	}while(isNaN(edad) || (edad < 18 || edad > 125))
	  	do
	  	{
	  		sexo = prompt("Ingrese el sexo(f o m)");
	  	}while(!isNaN(sexo) || (sexo != "f" && sexo != "m"));
	  	do
	  	{
	  		tipoDeTransaccion = prompt("¿Que tipo de transaccion desea? (Extraccion o Deposito)");
	  	}while(!isNaN(tipoDeTransaccion) || (tipoDeTransaccion != "Extraccion" && tipoDeTransaccion != "Deposito"));
	  	do
	  	{
	  		importe = prompt("Ingrese el importe");
	  		importe = parseInt(importe);
	  	}while(isNaN(importe) || (importe < 1 || importe > 5000));
	  	//Validar datos

	  	if(contador == 0 || edad < masJoven )
	  	{
	  		masJoven = edad;
	  		nombreMasJoven = nombreCliente;
	  	}
	  	if(contador == 0 || edad > masViejo)
	  	{
	  		masViejo = edad;
	  		masViejoImporte = importe;

	  	}

	  	if(sexo == "m")
	  	{
	  		hombresSuma++;
	  	}else
	  	{
	  		mujeresSuma++;
	  	}

	  	if(contador == 0 || importe > importeMasAlto)
	  	{
	  		importeMasAlto = importe;
	  		sexoImporteMasAlto = sexo;
	  	}

	  	switch(tipoDeTransaccion)
	  	{
	  		case "Extraccion":
	  			cantidadExtraccion++;
	  		break;
	  		case "Deposito":
	  			cantidadDeposito++;
	  		break;
	  	}

	  
	  	contador++;
	  	edadSuma = edadSuma + edad;
	  	respuesta = prompt("Si desea continuar ingrese 'S' si no, ingrese otra cosa");
 	 }
 	 	if(cantidadExtraccion > cantidadDeposito)
	  	{
	  		operacionMasUtilizada = "Extraccion";
	  	}else
	  	{
	  		operacionMasUtilizada = "Deposito";
	  	}

 	 promedioDeEdad = edadSuma / contador;
 	 console.log(promedioDeEdad);
 	 document.write("el promedio es: "+promedioDeEdad + "<br>");
 	 document.write("el nombre del mas joven es: " + nombreMasJoven + "<br>");
 	 document.write("La cantidad de hombres son: " + hombresSuma + "<br>");
 	 document.write("La cantidad de mujeres son: " + mujeresSuma + "<br>");
 	 document.write("El sexo del importe mas alto fue de: " + sexoImporteMasAlto + "<br>");
 	 document.write("La operacion mas utilizada es: " + operacionMasUtilizada + "<br>");
 	 document.write("El importe del mas viejo es de: " + masViejoImporte + "<br>");

}
