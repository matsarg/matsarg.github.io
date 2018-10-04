if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('../sw.js')
	.then(function() {
		console.log("Service Worker registered successfully");
	})
	.catch(function() {
		console.log("Service worker registration failed")
	});
}

// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
	material: true,
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
        lista: [
            {
				id: 00,
				clave: 'xxx_xxx',
				imagenes: [
					{
						imagenesclave: 'xxx_xxx',
						imagenescopyright: 'NombreyApellido',
					},
					{
						imagenesclave: 'xxx_xxx',
						imagenescopyright: 'NombreyApellido',
					},
				],
                ncientifico: 'Xxxx',
                nvulgar: 'Xxxx',
				familia: 'Xxxx',
                tamano: 'Xxxx',
				habitat: 'Xxxx',
				habito: 'Xxxx',
				conservauicn: 'blue',
				conservaarg: 'green',
				abundancia: 'green',
				dvisual: 'green',
				dauditiva: 'green',
				ene: 'fill',
				feb: 'fill',
				mar: 'outline',
				abr: 'outline',
				may: 'outline',
				jun: 'outline',
				jul: 'outline',
				ago: 'outline',
				sep: 'outline',
				oct: 'fill',
				nov: 'fill',
				dic: 'fill',
				caracteristicas: 'Xxxx',
				microhabitats: 'Xxxx',
				rangoaltitud: 'Xxxx',
				ecoregion: 'Xxxx',
				distrigeneral: 'Xxxx',
				distriargentina: 'Xxxx',
				distrijujuy: 'Xxxx',
				modoreproductivo: 'Xxxx',
				similares: [
					{
						similarid: '1',
						similarncientifico: 'Xxxx',
						similarnvulgar: 'Xxxx',
						similarclave: 'xxx_xxx',
					},
					{
						similarid: '2',
						similarncientifico: 'Xxxx',
						similarnvulgar: 'Xxxx',
						similarclave: 'xxx_xxx',
					},
				],
				bibliografia: 'Xxx',
			},
			{
				id: 12,
				clave: 'boana_raniceps',
				imagenes: [
					{
						imagenesclave: 'boana_raniceps',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_raniceps1',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_raniceps2',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_raniceps3',
						imagenescopyright: 'M. Akmentis',
					},
				],
                ncientifico: 'Boana raniceps',
                nvulgar: 'Rana trepadora del Chaco',
				familia: 'Hylidae',
                tamano: 'Mediano (35 a 65 mm)',
				habitat: 'Arborícola y acuático',
				habito: 'Nocturno',
				conservauicn: 'blue',
				conservaarg: 'green',
				abundancia: 'yellow',
				dvisual: 'yellow',
				dauditiva: 'yellow',
				ene: 'fill',
				feb: 'fill',
				mar: 'outline',
				abr: 'outline',
				may: 'outline',
				jun: 'outline',
				jul: 'outline',
				ago: 'outline',
				sep: 'outline',
				oct: 'fill',
				nov: 'fill',
				dic: 'fill',
				caracteristicas: 'Dorso de color marrón claro a amarillento, generalmente liso pero en algunos ejemplares con una línea media oscura. Patas muy largas y delgadas. Muslos con un patrón de barras oscuras, negro violáceo. Dedos con discos medianamente expandidos. Patas traseras con membrana entre los dedos. Vientre de color blanquecino o amarillento, con manchas débiles en la garganta y el pecho. Tímpano distinguible, de coloración y textura distinta a la piel del resto del cuerpo.',
				microhabitats: 'Se los observa en el agua o en la vegetación que crece alrededor de charcos y lagunas, también a orillas de grandes ríos.',
				rangoaltitud: 'Desde los 400 msnm',
				ecoregion: 'Yungas',
				distrigeneral: 'Colombia y Venezuela, Guayana Francesa, Brasil, Paraguay, Bolivia y Argentina',
				distriargentina: 'Buenos Aires, Chaco, Corrientes, Entre Ríos, Formosa, Jujuy, Misiones, Salta, Santa Fe y Santiago del Estero',
				distrijujuy: 'Xxxx',
				modoreproductivo: 'Pone los huevos en masas gelatinosas adheridas a la vegetación dentro del agua.',
				similares: [
					{
						similarid: '13',
						similarncientifico: 'Boana riojana',
						similarnvulgar: 'Rana del zarzal',
						similarclave: 'boana_riojana',
					},
				],
				bibliografia: 'Xxx',
            },
            {
				id: 13,
				clave: 'boana_riojana',
				imagenes: [
					{
						imagenesclave: 'boana_riojana',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_riojana1',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_riojana2',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_riojana3',
						imagenescopyright: 'M. Akmentis',
					},
					{
						imagenesclave: 'boana_riojana4',
						imagenescopyright: 'M. Akmentis',
					},
				],
                ncientifico: 'Boana riojana',
                nvulgar: 'Rana del zarzal',
				familia: 'Hylidae',
                tamano: 'Pequeño (45 a 50 mm)',
				habitat: 'Acuático',
				habito: 'Crepuscular y nocturno',
				conservauicn: 'xxx',
				conservaarg: 'green',
				abundancia: 'green',
				dvisual: 'green',
				dauditiva: 'green',
				ene: 'fill',
				feb: 'fill',
				mar: 'fill',
				abr: 'fill',
				may: 'fill',
				jun: 'fill',
				jul: 'fill',
				ago: 'fill',
				sep: 'fill',
				oct: 'fill',
				nov: 'fill',
				dic: 'fill',
				caracteristicas: 'Coloración dorsal muy variable, desde verde intenso, dorado u ocre completamente uniforme hasta combinaciones con manchas irregulares negras, marrones, doradas o blanquecinas. Patas muy largas y delgadas. Laterales y parte anterior y posterior de los muslos y patas de color celeste o amarrilento con barras oscuras. Vientre claro y muy granular. Tímpano distinguible, de coloración y textura distinta a la piel del resto del cuerpo. Discos adhesivos de los dedos de aspecto circular. Machos con una prolongación en forma de espina en el dedo pulgar de la mano.',
				microhabitats: 'Se los observa en el borde de ríos, arroyos o represas. Cantan desde la vegetación o sobre piedras parcialmente ocultos. Son más abundantes durante los meses más fríos y con menor precipitaciones, aunque es posible escucharlos todo el año.',
				rangoaltitud: '500 a 3400 m',
				ecoregion: 'Yungas, Chaco Seco, Puna y Monte de Sierras y Bolsones',
				distrigeneral: 'Bolivia y Argentina; posiblemente Perú',
				distriargentina: 'Salta, Jujuy, Tucumán, Catamarca y La Rioja',
				distrijujuy: 'Xxxx',
				modoreproductivo: 'Ponen sus huevos en remansos de arroyos. Depositan sus huevos en una única masa de huevos de color negro adheridos a la vegetación semisumergida, a grandes piedras o directamente en el fondo pedregoso. La puesta se asemeja a una gran mora.',
				similares: [
					{
						similarid: '12',
						similarncientifico: 'Boana raniceps',
						similarnvulgar: 'Rana trepadora del Chaco',
						similarclave: 'boana_raniceps',
					},
				],
				bibliografia: 'Xxx',
			},
			{
				id: 08,
				clave: 'ceratophrys_cranwelli',
				imagenes: [
					{
						imagenesclave: 'ceratophrys_cranwelli',
						imagenescopyright: 'M. Vaira',
					},
				],
                ncientifico: 'Ceratophrys cranwelli',
                nvulgar: 'Escuerzo chaqueño',
				familia: 'Ceratophryidae',
                tamano: 'Grande (75 a 130 mm)',
				habitat: 'Terrestre y fosorial',
				habito: 'Nocturno',
				conservauicn: 'blue',
				conservaarg: 'green',
				abundancia: 'green',
				dvisual: 'red',
				dauditiva: 'yellow',
				ene: 'fill',
				feb: 'fill',
				mar: 'outline',
				abr: 'outline',
				may: 'outline',
				jun: 'outline',
				jul: 'outline',
				ago: 'outline',
				sep: 'outline',
				oct: 'fill',
				nov: 'fill',
				dic: 'fill',
				caracteristicas: 'De cuerpo robusto de aspecto globoso y patas cortas. Una característica distintiva son las proyecciones similares a cuernos sobre los ojos. Su piel dorsal es granulosa, de color marrón o verde claro con manchas oscuras alargadas y poco notorias, bordeadas de claro. El vientre liso blanquecino amarillento.',
				microhabitats: 'Se los encuentra en cuerpos de agua temporarios, generalmente semienterrado en la orilla de los mismos. Presentan una reproducción explosiva. Para evitar la desecación, produce una cubierta o cocón, formada por las sucesivas mudas de piel acumuladas.',
				rangoaltitud: 'Hasta 700 msnm',
				ecoregion: 'Chaco Seco y Yungas',
				distrigeneral: 'Argentina; Bolivia; Brasil y Paraguay',
				distriargentina: 'Chaco, Córdoba, Formosa, Entre Ríos, Jujuy, Mendoza, Salta, San Luis, Santa Fe, Santiago del Estero, Tucumán.',
				distrijujuy: 'Xxxx',
				modoreproductivo: 'Depositan sus huevos sueltos en el fondo del cuerpo de agua',
				similares: [
				],
				bibliografia: 'Xxx',
			},
        ],
	},
	onAjaxStart: function(xhr) {
		myApp.showIndicator();
	},
	onAjaxComplete: function(xhr) {
		myApp.hideIndicator();
	}
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

// Audio
function playPause() {
    var miAudio = document.getElementById("audioCanto");
	var miLink = document.getElementById("linkCanto");
	if (miAudio.paused) {
		miAudio.play();
		miLink.innerHTML = "<i class='f7-icons color-white animation3 flash'>pause_round_fill</i>";
	} else {
		miAudio.pause();
		miLink.innerHTML = "<i class='f7-icons color-white'>play_round_fill</i>";
	}
}