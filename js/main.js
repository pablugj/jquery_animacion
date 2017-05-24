var inicio_evento;

$(inicio); //ready

function inicio(argument) 
{
	$("#generico").on("click",animacion);
	console.log("aqui");
}

function animacion()
{
	inicio_evento = new Date().getTime();
	$("#imagen").fadeIn(1000,termina);
	$("#imagen").animate(
		{
			
			opacity: ".5",
			width: "150%"
		}, 1500 );
	}

function termina() 
{
	var salidaHTML = 'termina()<br>';
	salidaHTML += 'Duracion: ' + (new Date().getTime()-inicio_evento) + ' ms';
	$('.salida').html(salidaHTML);
}