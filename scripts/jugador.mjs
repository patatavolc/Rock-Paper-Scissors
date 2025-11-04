export class Jugador {
  nombre;
  puntos;
  seleccion;

  constructor(nombre) {
    this.nombre = nombre;
    this.puntos = 0;
    this.seleccion = null;
  }
  
  // Getters y setters
  getNombre() {
    return this.nombre;
  }

  getPuntos() {
    return this.puntos;
  }

  getSeleccion() {
    return this.seleccion;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  setSeleccion(seleccion) {
    this.seleccion = seleccion;
  }

  // Métodos para manejar puntos
  agregarPuntos(puntos) {
    this.puntos += puntos;
  }

  reiniciarPuntos() {
    this.puntos = 0;
  }
}