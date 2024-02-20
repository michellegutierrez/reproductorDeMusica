
   

   class Song {

    constructor(id, nombre, artista, genero, duracion, anio, cover, album, urlSong){
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.genero = genero;
        this.duracion = duracion;
        this.anio = anio;
        this.cover = cover;
        this.album = album;
        this.urlSong= urlSong; 
        
   }
  getSongName(){
    return `${this.nombre}`;
  }

  getSongArtist(){
    return `${this.artista}`;
  }

  getSongGender(){
    return `${this.genero}`;
  }

  getSongDuration(){
    return `${this.duracion}`;
  }

  getSongYear(){
    return `${this.anio}`;
  }

  getSongCover(){
    return `${this.cover}`;
  }

  getSongUrl(){
    return `${this.urlSong}`;
}

}


class Playlist {
    constructor(nombre, listaDeCanciones){
        this.nombre = nombre;
        this.listaDeCanciones= listaDeCanciones;
       
    }
    
    playPlayList(){
       this.listaDeCanciones.forEach(song =>{
        console.log(`Se esta reproduciendo: ${song.nombre}`);
       });
    }

    getPlaylistName(){
        return this.nombre + this.listaDeCanciones;
    }
   
    addSongToFavorites(song){
        return this.listaDeCanciones.push(song);
    }

    addSongToPlaylist(song){
        return this.listaDeCanciones.push(song);
    }
    
    removeSongFromFavorites(song){
       this.listaDeCanciones.filter(cancion => cancion !== song);
    }

    removeSongFromPlaylist(song){
        this.listaDeCanciones.filter(cancion => cancion !== song);
     }
 


}





class   Reproductor {
  catalogoDeCanciones;
  cancionActual;
  audio;
  currentPlaylist;
  paused;

   constructor(){

    this.catalogoDeCanciones = [

      new Song("1","Adore you","harry","Pop", "3 minutos", "2025","./Song1Cover.png","album1","./1.mp3"),
      new Song("2","Physical","dua", "genero2", "3 minutos", "2025","./2cover.png","album1","./2.mp3"),
      new Song("3","Cancion3","autor3", "genero3", "3 minutos", "2025","./descarga.jpeg","album1","./3.mp3"),
      

    ] 

    this.mostrarCanciones();
    this.cancionActual = this.catalogoDeCanciones[0];
   
  
    this.audio = new Audio();
    this.currentPlaylist ="busqueda";

    let buscar = document.getElementById("buscarBoton");
    buscar.addEventListener("click",() => {
      this.buscarCancion(document.getElementById("buscador").value);
    });

    let play = document.getElementById("play");
    play.addEventListener('click', () =>{
      
     this.play();
     this.mostrarInfoyPortada();
    
    });

     let botonPausa = document.getElementById("pause");
    botonPausa.addEventListener("click", ()=>{
      console.log("pausa");
      this.pause();
    } );

  let botonStop = document.getElementById("stop");
  botonStop.addEventListener("click", ()=>{
    console.log("stop");
    this.stop();
  });

   let botonMute = document.getElementById("mute");
   botonMute.addEventListener("click", () =>{
    
    if (this.audio.muted) {
      this.audio.muted = false;
      
  } else {
      this.audio.muted = true;
      
  }
   }); 

 let botonAdelantar = document.getElementById("foward");
 botonAdelantar.addEventListener( "click" , () => {
  console.log("adelante") ;
  this.adelantar();
 
 });

 let botonRetroceder = document.getElementById( "backward" );
 botonRetroceder.addEventListener( "click" , () => {
  console.log("atras") ;
  this.retroceder();
 });
 
 this.audio.addEventListener("ended", () =>{
  this.adelantar();
  this.play();
  this.mostrarInfoyPortada();
 })
}



   mostrarCanciones(){
    let canciones = document.getElementById("resBusqueda");
    this.catalogoDeCanciones.forEach(song =>{
    
      canciones.innerHTML += `<div class="contenedorCancion"><p id="res_${song.id}" class="remover">${song.nombre}</p><button class="playListas "><i class="fa-solid fa-play"></i></button><button id="favorito"  class="remover agregarFavoritos"><i class="fa-solid fa-heart"></i></button></i><button  class="remover agregarPlaylist"><i class="fa-solid fa-plus"></i></button></div> `
     
   });

  }

   buscarCancion = function (inputUser){

    inputUser = inputUser.trim(inputUser);
  
    console.log(inputUser);
    let canciones = document.getElementById("resBusqueda");
    canciones.innerHTML = '';
    
    let resNombre = this.catalogoDeCanciones.filter(song => song.nombre.toLowerCase().includes(inputUser));
    let resArtista = this.catalogoDeCanciones.filter(song => song.artista.toLowerCase().includes(inputUser));
    let resAlbum = this.catalogoDeCanciones.filter(song => song.album.toLowerCase().includes(inputUser));
    let resGenero= this.catalogoDeCanciones.filter(song => song.genero.toLowerCase().includes(inputUser));
    
     let filtroDeCanciones = [...resNombre, ...resAlbum, ...resArtista, ...resGenero];
     console.log(filtroDeCanciones)
     console.log(...resNombre)
     filtroDeCanciones = [...new Set(filtroDeCanciones)]
     this.mostrarBusquedaDeCanciones(filtroDeCanciones);
  }

  mostrarBusquedaDeCanciones(filtroDeCanciones){
    let canciones = document.getElementById("resBusqueda");
    filtroDeCanciones.forEach(song => {
       
      canciones.innerHTML += `<div class="contenedorCancion"><p id="res_${song.id}" class="remover">${song.nombre}</p><button class="playListas remover"><i id=""class="fa-solid fa-play"></i></button><button id="favorito"  class="remover agregarFavoritos"><i class="fa-solid fa-heart"></i></button></i><button  class="remover agregarPlaylist"><i class="fa-solid fa-plus"></i></button></div> `
     
   });
  }

  adelantar() {
    const cancionId = this.catalogoDeCanciones.findIndex(song => song === this.cancionActual);
    if (cancionId !== -1) {
     
        let siguienteCancion = this.catalogoDeCanciones[cancionId + 1];

        if (this.playing) {
            this.pause();
        }

        if (!siguienteCancion || siguienteCancion ==  undefined ) {
          siguienteCancion = this.catalogoDeCanciones[0];
      }

        this.cancionActual = siguienteCancion;
        this.audio.src = "/canciones/" + this.cancionActual.urlSong;
        this.audio.oncanplaythrough = () => {
            this.play();
            this.mostrarInfoyPortada(this.cancionActual);
            this.audio.oncanplaythrough = null; 
        };
    }
}
  retroceder(){
    const cancionId = this.catalogoDeCanciones.findIndex(song => song === this.cancionActual);
    if (cancionId !== -1) {
     
        let cancionPrevia = this.catalogoDeCanciones[cancionId - 1];

        if (this.playing) {
            this.pause();
        }

        if (!cancionPrevia || cancionPrevia  ==  undefined ) {
          cancionPrevia  = this.catalogoDeCanciones[0];
      }

        this.cancionActual = cancionPrevia;
        this.audio.src = "/canciones/" + this.cancionActual.urlSong;
        this.audio.oncanplaythrough = () => {
            this.play();
            this.mostrarInfoyPortada(this.cancionActual);
            this.audio.oncanplaythrough = null; 
        };
    }
  }


 stop(){
  
   
    this.cancionActual.currentTime = this.audio.currentTime = 0;
    this.audio.pause();
 }

 pause() {
  if (!this.audio.paused) {
      this.cancionActual.currentTime = this.audio.currentTime;
      this.audio.pause();
  } else {
      this.audio.play();
  }
}

play() {
  if (this.cancionActual) {
    if(this.cancionActual !==  undefined){
      this.audio.src = "/canciones/" + this.cancionActual.urlSong;
    }
      if (this.cancionActual.currentTime >= 0) {
        this.audio.currentTime = this.cancionActual.currentTime; 
    }
    this.audio.play();
  } else {

     
    this.audio.play();
    this.audio.paused =true;
  }
}

   
   
   mostrarInfoyPortada = function(){
     const portada = document.getElementById("portada");
     const cancionInfoNombre = document.getElementById("nombreCancion")
     const cancionInfoDuracion = document.getElementById("duracion");
     const cancionInfoArtista = document.getElementById("artista");
     const cancionInfoAlbum = document.getElementById("album");
     const cancionInfoYear = document.getElementById("year");
     const cancionInfoGenero = document.getElementById( "genero");

     if (this.cancionActual != undefined) {
      portada.src = "/imagenes/"+ this.cancionActual.cover;
     cancionInfoNombre.innerHTML = this.cancionActual.nombre;
     cancionInfoDuracion.innerHTML = this.cancionActual.duracion;
     cancionInfoArtista.innerHTML = this.cancionActual.artista;
     cancionInfoAlbum.innerHTML = this.cancionActual.album;
     cancionInfoYear.innerHTML= this.cancionActual.anio;
     cancionInfoGenero.innerHTML = this.cancionActual.genero;
   }

  }
}


let reproductor = new Reproductor();



