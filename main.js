onload = () =>{
    document.body.classList.remove("container");
};

const mensajes = [
  "Eres mi persona favorita :)",
    "No sé en que momento te volviste tan importante para mí",
    "Gracias por existir y llegar a mi vida!",
    "Mi lugar favorito eres tú",
    "Te quiero hasta el infinito, gatita :3"  
];

 const fondos = [
  "url('img/flor1.jpg')", 
  "url('img/flor2.avif')", 
  "url('img/flor3.jpg')", 
  "url('img/flor4.jpg')", 
  "url('img/flor5.jpg')"
];
const colores = [
  '#ffffff',
  '#bf1e1e',
  '#FFC857',
  '#F2A7A7',
  '#29bf1e',
];

let indice = 0;
let visible = false;

const nota = document.getElementById("nota");
const texto = document.getElementById("texto");
const fondo = document.getElementById("fondo");

// 1) ABRIR: solo si haces click en una flor (y la nota NO está visible)
const flowersRoot = document.querySelector(".flowers"); // contenedor grande de las flores
flowersRoot.addEventListener("click", (e) => {
  const clickedFlower = e.target.closest(".flower"); // detecta si el click fue en una flor
  if (!clickedFlower) return;

  if (!visible) {
    // mostrar con el siguiente mensaje
    texto.textContent = mensajes[indice];
    texto.style.color = colores[indice];
    fondo.style.backgroundImage = fondos[indice];
    fondo.style.backgroundSize = "cover";
    indice = (indice + 1) % mensajes.length;
    

    nota.classList.remove("hidden");
    visible = true;

    // IMPORTANTÍSIMO: evita que el click suba al body y la cierre instantáneamente
    e.stopPropagation();
  }
  // si visible==true, NO hacemos nada:
  // dejamos que el click burbujee al body y el body la cierre (como "click donde sea")
});

// 2) CERRAR: click en cualquier parte cuando la nota está visible
document.addEventListener("click", () => {
  if (!visible) return;
  nota.classList.add("hidden");
  visible = false;
});
texto.textContent = mensajes[indice];
