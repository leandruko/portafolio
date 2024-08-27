const typed = new Typed('.typed', {
	strings: [
        'Leandro Soto Miranda',
		'leandruso',
		'levndruk',
		'レアンドロ',
        'lea ^_-',
        
	],
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 10, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'null', // 'html' o 'null' para texto sin formato
});


document.querySelectorAll('a.nav-link').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
	  e.preventDefault();
  
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });
  