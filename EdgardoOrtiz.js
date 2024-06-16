// Paso 1: Crear un arreglo con 5 clientes
const clientes = [
  {
    id: 1,
    nombre: 'Mario',
    apellido: 'Hernandez',
    edad: 30,
    servicios: [
      { nombre: 'Netflix', estado: true },
      { nombre: 'Spotify', estado: false }
    ]
  },
  {
    id: 2,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    servicios: [
      { nombre: 'Netflix', estado: false },
      { nombre: 'HBO+', estado: false }
    ]
  },
  {
    id: 3,
    nombre: 'Lisbeth',
    apellido: 'Gimenez',
    edad: 47,
    servicios: [
      { nombre: 'HBO+', estado: true }
    ]
  },
  {
    id: 4,
    nombre: 'Edgardo',
    apellido: 'Ortiz',
    edad: 28,
    servicios: [
      { nombre: 'Disney+', estado: true },
      { nombre: 'Spotify', estado: true }
    ]
  },
  {
    id: 5,
    nombre: 'Carolina',
    apellido: 'Rijo',
    edad: 35,
    servicios: [
      { nombre: 'Netflix', estado: true },
      { nombre: 'Amazon Prime', estado: false }
    ]
  }
];

// Paso 2: Función para mostrar los clientes y sus servicios
function mostrarClientes(clientes) {
  clientes.forEach(cliente => {
    console.log(`Cliente ${cliente.nombre} ${cliente.apellido}:`);
    cliente.servicios.forEach(servicio => {
      console.log(`- Su servicio ${servicio.nombre} está ${servicio.estado ? 'Activo' : 'Inactivo'}.`);
    });
  });
}

// Mostrar los clientes y sus servicios
mostrarClientes(clientes);

