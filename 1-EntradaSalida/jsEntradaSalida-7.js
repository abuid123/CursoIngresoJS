/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert(suma);


}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero - segundoNumero;

	alert(resultado);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero * segundoNumero;

	alert(resultado);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero / segundoNumero;

	alert(resultado);
}

