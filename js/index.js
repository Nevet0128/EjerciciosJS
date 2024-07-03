import animacion_carrusel from './carrusel_imagenes.js'
import { countDown } from './countdown.js'
import darkMode from './dark_mode.js'
import deteccionCamara from './deteccion_camara.js'
import userDeviceInfo from './deteccion_dispositivo.js'
import isOnline from './estado_conexion.js'
import search_filter from './filtro_busqueda.js'
import localizacion from './geolocalizacion.js'
import goTop from './ir_arriba.js'
import hamburgerMenu from './menu_hamburguesa.js'
import { movemeBall, shortcuts } from './movimiento_shortcuts.js'
import prueba_responsive from './prueba_responsive.js'
import showClock from './reloj_alarma.js'
import responisveLinks from './responsive_maps_&_youtube_video.js'
import scrollSpy from './ScrollSpy/scroll_spy.js'
import lottery from './sorteo.js'
import audioFocus from './audio_focus.js'
import textSpeech from './text_speech.js'

const d = document

d.addEventListener('DOMContentLoaded', (e) => {
  d.querySelector('#darkMode-btn').textContent = localStorage.getItem('Dark')

  hamburgerMenu('.panel-btn', '.panel', '.menu *')
  showClock(
    '#start-time',
    '#stop-time',
    '#clock',
    '#start-alarm',
    '#stop-alarm',
    '#play'
  )

  countDown(
    '#countdown-container',
    '#final-date',
    '#countdown',
    '#show-countdown',
    '#hidde-countdown'
  )

  goTop('#top-btn')

  responisveLinks('#section4')

  prueba_responsive('responsive-tester')

  userDeviceInfo('user-device')

  isOnline('#isOnline')

  deteccionCamara('#webcam')

  localizacion('#geoLocation')

  search_filter('.figCaption', 'searchbarSection10')

  lottery('lotteryItems', '#lotteryButton')

  animacion_carrusel('#section12-mainContainer')

  scrollSpy('.section', '#mobile-aside-panel a')
  //audioFocus();
  textSpeech('select_language', 'section14Text', 'section14Btn')
})

darkMode('#darkMode-btn') //está afuera porque no se anida el DOMContentLoaded

d.addEventListener('keydown', (e) => {
  movemeBall(e, '#stage', '#ball')
  shortcuts(e)
})
