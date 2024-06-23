
class Vehículo {
  constructor(marca, modelo, año, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }

  descripción() {
    return `${this.marca} ${this.modelo} (${this.año}), Color: ${this.color}`;
  }

  arrancar() {
    return `${this.marca} ${this.modelo} está arrancando.`;
  }

  detener() {
    return `${this.marca} ${this.modelo} está detenido.`;
  }
}


class Coche extends Vehículo {
  constructor(marca, modelo, año, color, numPuertas) {
    super(marca, modelo, año, color);
    this.numPuertas = numPuertas;
  }

  tocarBocina() {
    return `${this.marca} ${this.modelo} está tocando la bocina.`;
  }
}

// Clase derivada Moto
class Moto extends Vehículo {
  constructor(marca, modelo, año, color, tipo) {
    super(marca, modelo, año, color);
    this.tipo = tipo;
  }

  calibrar() {
    return `${this.marca} ${this.modelo} está siendo calibrada.`;
  }
}


const coche1 = new Coche('Ford', 'Focus', 2018, 'Blanco', 4);
const coche2 = new Coche('Chevrolet', 'Cruze', 2016, 'Rojo', 4);

const moto1 = new Moto('Harley-Davidson', 'Sportster', 2019, 'Negro', 'Cruiser');
const moto2 = new Moto('Ducati', 'Monster', 2020, 'Rojo', 'Naked');

console.log(coche1.descripción());
console.log(coche1.arrancar());
console.log(coche1.detener());
console.log(coche1.tocarBocina());

console.log(coche2.descripción());
console.log(coche2.arrancar());
console.log(coche2.detener());
console.log(coche2.tocarBocina());

console.log(moto1.descripción());
console.log(moto1.arrancar());
console.log(moto1.detener());
console.log(moto1.calibrar());

console.log(moto2.descripción());
console.log(moto2.arrancar());
console.log(moto2.detener());
console.log(moto2.calibrar());
