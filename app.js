// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  //Para evitar mas de 1 espacios adicionales entre palabras, evitar que registre duplicidad de nombres en la lista
  nombre = nombre.replace(/\s+/g, " ");

  //Para evitar nombres iguales en la lista, se convierte el nombre ingresado a minuscula para su comparación
  let nombreMinusculas = nombre.toLowerCase();

  if (nombre == "") {
    alert("Debes ingresar un nombre");
  } else if (nombre.length < 2) {
    alert(
      `El nombre "${nombre}" no es valido, debe tener al menos 2 caracteres`
    );
  } else if (amigos.includes(nombreMinusculas)) {
    alert(
      `El nombre "${nombre}" ya existe en la lista, por favor ingrese otro nombre`
    );
  } else {
    amigos.push(nombreMinusculas); //inserta los nombres ingresados en el arreglo en orden uno seguido de otro
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombre}</li>`;
    document.getElementById("amigo").value = "";
  }
}

// Se agregó el evento de escucha para bloquear la entrada de caracteres numéricos
document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    event.preventDefault();
    alert('no está permitido ingresar números, por favor ingrese un nombre válido');
  }
});

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos 2 amigos");
  } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>El amigo sorteado es: ${amigoSorteado}</h3>`; //muestra en lista los nombres ingresados en el arreglo

    //desactiva los botones una vez sorteado el amigo secreto, para evitar ingresar mas nombres
    document.getElementById("amigo").disabled = true;
    document.querySelector(".button-add").disabled = true;
    document.querySelector(".button-draw").disabled = true;
  }
}

function limpiarCaja() {
  let valorCaja = document.getElementById("amigo");
  valorCaja.value = "";

  // limpia el array de amigos
  amigos = [];

  // limpia la lista de amigos en el HTML
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  // limpua el resultado del sorteo
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  //cambia de estado desactivado a activo los inputs y buttons
  document.getElementById("amigo").disabled = false;
  document.querySelector(".button-add").disabled = false;
  document.querySelector(".button-draw").disabled = false;
}
