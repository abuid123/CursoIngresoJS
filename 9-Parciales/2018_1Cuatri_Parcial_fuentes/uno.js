/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var maximoCantidadDePersonas;
	var maximoCantidadDePersonasNombre;
	var cantidadDeDias;
	var cantidadDeDiasPersonas;
	var contador;
	contador = 0;
	var formaDePago;
	var respuesta;
	var cantidadQR = 0;
	var cantidadTarjeta = 0;
	var cantidadEfectivo = 0;
	var formaDePagoMasUsada;
	var promedio;
	var cantidadDeDiasSuma = 0;
	respuesta = "S";

	while(respuesta == "S")	
	{
		nombre = prompt("Escribi tu nombre");

		do{
			cantidadDePersonas = prompt("Cantidad de personas");
			cantidadDePersonas = parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas) || (cantidadDePersonas < 1 || cantidadDePersonas > 20));

		do{
			cantidadDeDias = prompt("Cantidad de dias");
			cantidadDeDias = parseInt(cantidadDeDias);
			///cantidadDeDiasSuma = cantidadDeDiasSuma + cantidadDeDias;
		}while(isNaN(cantidadDeDias) || cantidadDeDias < 1);

		do{
			formaDePago = prompt("Forma de pago");
		}while((!isNaN(formaDePago)) || (formaDePago != "Efectivo") && (formaDePago != "QR") && (formaDePago != "Tarjeta"))



		cantidadDeDiasSuma = cantidadDeDiasSuma + cantidadDeDias;


		if(contador == 0 || cantidadDePersonas > maximoCantidadDePersonas)
		{
			maximoCantidadDePersonas = cantidadDePersonas;
			maximoCantidadDePersonasNombre = nombre;          //Huesped maximo personas
		}

		if(contador == 0 || cantidadDeDias > maximoCantidadDeDias)
		{
			maximoCantidadDeDias = cantidadDeDias;				//Maximo cantidad de personas que se quedaron mas dias
			maximoCantidadDeDiasPersonas = cantidadDeDias;
		}

		switch(formaDePago)
		{
			case "Efectivo":
				cantidadEfectivo++;
			break;
			case "QR":
				cantidadQR++;
			break;
			case "Tarjeta":
				cantidadTarjeta++;
			break;

		}

		if((cantidadEfectivo > cantidadQR) && (cantidadEfectivo > cantidadTarjeta)){
			formaDePagoMasUsada = "Efectivo"
		}else
		{
			if((cantidadQR > cantidadEfectivo) && cantidadQR > cantidadTarjeta)
			{
				formaDePagoMasUsada = "QR"
			}else
			{
				formaDePagoMasUsada = "Tarjeta"
			}
		}

		respuesta = prompt("Si quiere seguir ingresando personas presione S para continuar");
		contador++;


		promedio = cantidadDeDiasSuma / contador;
	}

	console.log("El huesped que trajo mas cantidad de visitas es " + maximoCantidadDePersonasNombre + " trajo " + maximoCantidadDePersonas + " personas");
	console.log(maximoCantidadDeDiasPersonas +  " fueron las personas que se quedaron mas dias");
	console.log("La forma de pago mas utilizada fue " + formaDePagoMasUsada);
	console.log("El promedio de dias por reserva es de " + promedio);
}
