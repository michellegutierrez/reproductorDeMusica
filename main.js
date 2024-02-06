let buscarBoton = document.getElementById("buscarBoton");

let canciones = ["Cancion 1", "Cancion 2", "Cancion 3", "Las maanitas", "Cancion 4", "Cancion 5", "Cancion 6", "Cancion 7", "Cancion 8", "Cancion 9", "Cancion 10"];


buscarBoton.addEventListener(
    "click",
    function buscar () {
        let loqueelusuariometio = document.getElementById("buscador").value;

        let expresion = new RegExp(loqueelusuariometio, "i");
 
        let cancionesFiltradas = canciones.filter(
 
            song => expresion.test(song)
        );
        
        let removerP = document.getElementsByClassName("remover");
        
           
      
        for (let i = removerP.length-1; i >= 0; i--) {
            removerP[i].remove();
        }
  

           let listaEntera = document.getElementById("listaEntera");
           cancionesFiltradas.forEach(cancion => {
               let nuevaCancion = document.createElement("div");
               let tituloNuevaCancion = document.createElement("p");
               tituloNuevaCancion.classList.add("remover");
               tituloNuevaCancion.innerHTML = cancion;
   
               let botonPlay = document.createElement("button");
               botonPlay.classList.add("play", "remover");
               botonPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
   
               let botonAgregarAfavoritos = document.createElement("button");
               botonAgregarAfavoritos.classList.add("agregarFavoritos", "remover");
               botonAgregarAfavoritos.innerHTML = '<i class="fa-solid fa-heart"></i>';
   
               let botonAgregarPlaylist = document.createElement("button");
               botonAgregarPlaylist.classList.add("agregarPlaylist", "remover");
               botonAgregarPlaylist.innerHTML = '<i class="fa-solid fa-plus"></i>';
   
               nuevaCancion.appendChild(tituloNuevaCancion);
               nuevaCancion.appendChild(botonPlay);
               nuevaCancion.appendChild(botonAgregarAfavoritos);
               nuevaCancion.appendChild(botonAgregarPlaylist);
              
               listaEntera.appendChild(nuevaCancion);
           });
       }
   );
