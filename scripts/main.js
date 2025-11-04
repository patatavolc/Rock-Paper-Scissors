import { Jugador } from './jugador.mjs';

console.log('🎮Iniciando juego ...');

const opciones = ['Piedra', 'Papel', 'Tijera'];

const jugador = new Jugador('Jugador 1');
const maquina = new Jugador('Máquina');

console.log('Jugadores creados:', jugador, maquina);

// Obtener elementos del DOM
console.log('Obteniendo elementos del DOM...');

const playerScoreEl = document.querySelector('.player-score');
const machineScoreEl = document.querySelector('.machine-score');

const playerStatusEl = document.querySelector('#players-zone .player-info:first-child small');
const machineStatusEl = document.querySelector('#players-zone .player-info:last-child small');

const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijera = document.getElementById('tijera');

const btnReiniciar = document.querySelector('.reset');

console.log('Elementos obtenidos:', {
  playerScoreEl,
  machineScoreEl,
  playerStatusEl,
  machineStatusEl,
  btnPiedra,
  btnPapel,
  btnTijera,
  btnReiniciar
});

// Event listeners para los botones de opciones
btnPiedra.addEventListener('click', () => {
  console.log('Click en botón PIEDRA');
  jugar('Piedra');
});
btnPapel.addEventListener('click', () => {
  console.log('Click en botón PAPEL');
  jugar('Papel');
});
btnTijera.addEventListener('click', () => {
  console.log('Click en botón TIJERA');
  jugar('Tijera');
});

// Event listeners para botones de control
btnReiniciar.addEventListener('click', reiniciar);

// Función principal del juego
function jugar(eleccionJugador) {
  console.log('=== NUEVA RONDA ===');
  console.log('Jugador eligió:', eleccionJugador);
  
  jugador.setSeleccion(eleccionJugador);
  
  const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  console.log('Máquina eligió:', eleccionMaquina);
  
  maquina.setSeleccion(eleccionMaquina);
  
  const ganador = determinarGanador(eleccionJugador, eleccionMaquina);
  console.log('Ganador:', ganador);
  
  if (ganador === 'Jugador') {
    jugador.agregarPuntos(1);
  } else if (ganador === 'Máquina') {
    maquina.agregarPuntos(1);
  }
  
  console.log('Puntos Jugador:', jugador.getPuntos());
  console.log('Puntos Máquina:', maquina.getPuntos());
  
  actualizarPantalla(eleccionJugador, eleccionMaquina, ganador);
}

// Actualizar elementos visuales
function actualizarPantalla(eleccionJugador, eleccionMaquina, ganador) {
  console.log('Actualizando pantalla...');
  
  playerScoreEl.textContent = jugador.getPuntos();
  machineScoreEl.textContent = maquina.getPuntos();
  
  if (ganador === 'Empate') {
    playerStatusEl.textContent = `Elegiste ${eleccionJugador} - ¡Empate!`;
    machineStatusEl.textContent = `Eligió ${eleccionMaquina} - ¡Empate!`;
  } else if (ganador === 'Jugador') {
    playerStatusEl.textContent = `Elegiste ${eleccionJugador} - ¡Ganaste!`;
    machineStatusEl.textContent = `Eligió ${eleccionMaquina} - Perdió`;
  } else {
    playerStatusEl.textContent = `Elegiste ${eleccionJugador} - Perdiste`;
    machineStatusEl.textContent = `Eligió ${eleccionMaquina} - ¡Ganó!`;
  }
  
  console.log('Pantalla actualizada ');
}

// Reiniciar todo el juego
function reiniciar() {
  console.log('REINICIANDO JUEGO...');
  
  jugador.reiniciarPuntos();
  maquina.reiniciarPuntos();
  
  playerScoreEl.textContent = '0';
  machineScoreEl.textContent = '0';
  playerStatusEl.textContent = 'Elige una opción';
  machineStatusEl.textContent = 'Pensando...';
  
  console.log('Juego reiniciado. Puntos a 0');
}

// Lógica para determinar el ganador
function determinarGanador(eleccionJugador, eleccionMaquina) {
  console.log(`Comparando: ${eleccionJugador} vs ${eleccionMaquina}`);
  
  if (eleccionJugador === eleccionMaquina) {
    console.log('→ Resultado: Empate');
    return 'Empate';
  }
  
  if (
    (eleccionJugador === 'Piedra' && eleccionMaquina === 'Tijera') ||
    (eleccionJugador === 'Papel' && eleccionMaquina === 'Piedra') ||
    (eleccionJugador === 'Tijera' && eleccionMaquina === 'Papel')
  ) {
    console.log('→ Resultado: Gana Jugador');
    return 'Jugador';
  }
  
  console.log('→ Resultado: Gana Máquina');
  return 'Máquina';
}