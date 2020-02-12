/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad = document.getElementById('Cantidad').value;
	cantidad = parseInt(cantidad);
	var marca = document.getElementById('Marca').value;
	var precio = 35;
	var porcentajeDescuento;
	var precioSinDescuento;
	var precioConDescuento;
	var precioFinal;

	precioSinDescuento = precio*cantidad;

	if(cantidad > 5)
	{
		porcentajeDescuento = 50;
	}
	else
	{
		if(cantidad==5)
		{	
			if (marca == "ArgentinaLuz") 
			{
				porcentajeDescuento = 40;
			}else
			{
				porcentajeDescuento = 30;
			}
		}if(cantidad == 4)
		{
			if(marca == "ArgentinaLuz" || "FelipeLamparas")
			{	
				porcentajeDescuento = 25;
			}else
			{
				porcentajeDescuento = 20;
			}
		}else
		{
			if(cantidad == 3)
			{
				if(marca == "ArgentinaLuz")
				{
					porcentajeDescuento = 15;
					if(marca == "FelipeLamparas")
					{
						porcentajeDescuento = 10;
					}
				}else
				{
					porcentajeDescuento = 5;
				}
			}
		}
	}
	precioConDescuento=cantidad*precio*(porcentajeDescuento/100);
	precioFinal = precioSinDescuento - precioConDescuento;
	if(precioFinal > 120){
		precioFinal = precioFinal*0,1;
		alert(" ”Usted pago" +precioFinal+ "de IIBB.”, siendo" + precioFinal+ "el impuesto que se pagó. ");
	}
	document.getElementById('precioDescuento').value = precioFinal;
}
