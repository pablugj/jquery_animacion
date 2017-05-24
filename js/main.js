var inicio_evento;

$(inicio);

function inicio(argument) 
{
	$("#generico").on("click",animacion);
	console.log("aqui");
}

function animacion()
{
	inicio_evento = new Date().getTime();
	$(".imagen").fadeOut('slow',termina)
}

function termina() 
{
	var salidaHTML = 'termina()<br>';
	salidaHTML += 'Duracion: ' + (new Date().getTime()-inicio_evento) + ' ms';
	$('.salida').html(salidaHTML);
}