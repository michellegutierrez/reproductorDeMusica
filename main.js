
   

   class Song {

    constructor(id, nombre, artista, album, anio, duracion, genero, cover, urlSong){
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.cover = cover;
        this.urlSong= urlSong; 
        
   }
  getSongName(){
    return `${this.nombre}`;
  }

  getSongArtist(){
    return `${this.artista}`;
  }
 
  getSingAlbum(){
    return `${this.album}`;
  }
  getSongYear(){
    return `${this.anio}`;
  }

  getSongDuration(){
    return `${this.duracion}`;
  }
  getSongGenero(){
    return `${this.genero}`;
  }

  getSongCover(){
    return `${this.cover}`;
  }

  getSongUrl(){
    return `${this.urlSong}`;
}

}



class Playlist {
  listaDeCanciones;
  indiceActual;
  constructor(nombre){
      this.nombre = nombre;
      this.listaDeCanciones= [];
      this.indiceActual = 0;  

       

  let botonAgregarPlaylist = document.getElementsByClassName("agregarFavoritos");
  for (let i=0; i < botonAgregarPlaylist.length; i++){
    
    botonAgregarPlaylist[i] .addEventListener("click", () => {
      console.log("botonfavorito")
      console.log(this.listaDeCanciones);
      this.addSongToFavorites(song);
     
    });
  }

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
     this.listaDeCanciones.push(song);
     this.mostrarCancionFavoritos();
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
 
   mostrarCancionFavoritos(){
    let canciones = document.getElementById("listaFavoritos");
    this.catalogoDeCanciones.forEach(song =>{
    
      canciones.innerHTML += `<div class="contenedorCancion"><p id="res_${song.id}" class="remover">${song.nombre}</p><button><i class="fa-solid fa-play"></i><button><i class="fa-regular fa-heart"></i></button><button><i class="fa-solid fa-plus"></i></button>`
     
   });
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


      new Song("1","La costa del silecio","Mago de Oz","Gaia","2003","04:40:00","Rock","../assets/imagenes/cover1.jpg","../assets/audios/cancion1.mp3"),
      new Song("2","Azul","Aztlán","Zoe","2018","03:14:00","rock alternativo","../assets/imagenes/cover2.jpg","../assets/audios/cancion2.mp3"),
      new Song("3","I wanna be yours","Arctic Monkeys","AM","2013","03:04:00","Indie rock","../assets/imagenes/cover3.jpg","../assets/audios/cancion3.mp3"),
      new Song("4","Love of my life","Queen","A night at the opera","1975","03:37:00","Rock","../assets/imagenes/cover4.jpg","../assets/audios/cancion4.mp3"),
      new Song("5","Good Old-Fashioned lover boy","Queen","A day at the races","1976","02:53:00","Rock","../assets/imagenes/cover5.jpg","../assets/audios/cancion5.mp3"),
      new Song("6","Adore you","Harry Styles","Harry's House","2022","03:13:00","Pop","../assets/imagenes/cover6.png",'../assets/audios/cancion6.mp3'),
      new Song("7","Feel good Inc","Gorillaz","Demon days","2005","03:34:00","Rock","../assets/imagenes/cover7.jpg","../assets/audios/cancion7.mp3"),
      new Song("8","Money","The drums","Portamento","2011","03:54:00","Surf rock","../assets/imagenes/cover8.jpg","../assets/audios/cancion8.mp3"),
      new Song("9","Origami","The rare occaions","Big whoop","2021","02:54:00","rock alternativo, el indie pop y el post-punk","../assets/imagenes/cover9.jpg","../assets/audios/cancion9.mp3"),
      new Song("10","Like i can","Sam Smith","In the lonely hour","2014","02:47:00","Pop","../assets/imagenes/cover10.jpg","../assets/audios/cancion10.mp3"),
      new Song("11","Happy together","The Trutles","Happy together","1976","02:56:00","Pop rock","../assets/imagenes/cover11.jpg","../assets/audios/cancion11.mp3"),
      new Song("12","Titanium","David Guetta, Sia","Nothing but the beat","2020","04:05:00","Pop electronica","../assets/imagenes/cover12.jpg","../assets/audios/cancion12.mp3"),
      new Song("13","Billie Bossa Nova","Billie Eilish","Happier than ever","2021","03:17:00","Pop","../assets/imagenes/cover13.jpg","../assets/audios/cancion13.mp3"),
      new Song("14","The loneliest","Maneskin","Teatro d'ira: Vol. I","2022","04:07:00","Rock alternativo","../assets/imagenes/cover14.jpg","../assets/audios/cancion14.mp3"),
      new Song("15","Say yes to haven","Lana de rey","Say Yes to Heaven","2023","03:29:00","Dream pop","../assets/imagenes/cover15.jpg","../assets/audios/cancion15.mp3"),
      new Song("16","Favorite crime","Olivia Rodrigo","SOUR","2021","02:32:00","Pop","../assets/imagenes/cover16.jpg","../assets/audios/cancion16.mp3"),
      new Song("17","Until I Found You","Stepdhen Sanchez","Easy on my eyes","2022","02:56:00","Rock","../assets/imagenes/cover17.jpg","../assets/audios/cancion17.mp3"),
      new Song("18","I aint worried ","OneRepublic","I aint worried","2022","02:28:00","Pop","../assets/imagenes/cover18.jpg","../assets/audios/cancion18.mp3"),
      new Song("19","Teeth","5 seconds o summer","CALM","2020","03:26:00","Pop rock","../assets/imagenes/cover19.jpg","../assets/audios/cancion19.mp3"),
      new Song("20","House of Memories","Panic! At The Disco","Death of bachelor","2016","03:29:00","Pop rock","../assets/imagenes/cover20.jpg","../assets/audios/cancion20.mp3"),
      new Song("21","Counting Stars","OneRepublic","Native","2013","04:17:00","Pop rock","../assets/imagenes/cover21.jpg","../assets/audios/cancion21.mp3"),
      new Song("22","Thats what i want","Lil Nas X","MONTERO","2021","02:24:00","Pop","../assets/imagenes/cover22.jpg","../assets/audios/cancion22.mp3"),
      new Song("23","Kiwi","Harry Styles","Harry Styles","2017","02:56:00","Pop","../assets/imagenes/cover23.jpg","../assets/audios/cancion23.mp3"),
      new Song("24","Run","OneRepublic","Human","2021","02:48:00","Pop","../assets/imagenes/cover24.jpg","../assets/audios/cancion24.mp3"),
      new Song("25","Cake by the ocean","DNCE","DNCE ","2016","03:39:00","Pop","../assets/imagenes/cover25.jpg","../assets/audios/cancion25.mp3"),
      new Song("26","Woman","Doja Cat","Planet  her","2021","03:39:00","Pop","../assets/imagenes/cover26.jpg","../assets/audios/cancion26.mp3"),
      new Song("27","Levitating ","Dua lipa, Dababy","Future Nostalgia ","2020","03:23:00","Pop","../assets/imagenes/cover27.jpg","../assets/audios/cancion27.mp3"),
      new Song("28","Physical","Dua lipa","Future Nostalgia ","2020","03:03:00","Pop","../assets/imagenes/cover28.jpg","../assets/audios/cancion28.mp3"),
      new Song("29","Feel this moment","Pitbull, Christina Aguilera","Global Warming","2012","03:50:00","Pop","../assets/imagenes/cover29.jpg","../assets/audios/cancion29.mp3"),
      new Song("30","Break My Heart","Dua lipa","Future Nostalgia ","2020","03:42:00","Pop","../assets/imagenes/cover30.jpg","../assets/audios/cancion30.mp3")

    ] 

    this.mostrarCanciones();
    this.cancionActual = this.catalogoDeCanciones[0];
    this.audio = new Audio();
    this.currentPlaylist ="busqueda";
    this.listaFavoritos = new Playlist("listaFavoritos");
    this.listaMiPlaylist= new Playlist("listaMiPLaylist");



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
    
      canciones.innerHTML += `<div class="contenedorCancion"><p id="res_${song.id}" class="remover">${song.nombre}</p><button class="playListas "><i class="fa-solid fa-play"></i></button><button id="favorito"  class="agregarFavoritos"><i class="fa-solid fa-heart"></i></button></i><button  class="agregarPlaylist"><i class="fa-solid fa-plus"></i></button></div> `
     
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
        this.audio.src = "../audios/" + this.cancionActual.urlSong;
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
        this.audio.src = "../audios/" + this.cancionActual.urlSong;
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
      this.audio.src = "../audios/" + this.cancionActual.urlSong;
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



