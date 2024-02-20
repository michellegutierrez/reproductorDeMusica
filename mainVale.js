
  class Song {

    constructor(id, nombre, artista, genero, duracion, anio, cover, album, urlSong){
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.urlCover = urlCover;
        this.urlSong= urlSong; 
    }
              
  getSongName(){
    return `${this.nombre}`;
  }

  getSongArtist(){
    return `${this.artista}`;
  }

  getSongAlbum(){
    return `${this.album}`;
  }

  getSongYear(){
    return `${this.anio}`;
  }

  getSongDuration(){
    return `${this.duracion}`;
  }
  
  getSongGender(){
    return `${this.genero}`;
  }

  getSongUrlCover(){
    return `${this.urlCover}`;
  }

  getSongUrlSong(){
    return `${this.urlSong}`;
}

}


  class Playlist {
    constructor(nombre, listaDeCanciones, ordenEscucha){
        this.nombre = nombre;
        this.listaDeCanciones= listaDeCanciones;
        this.ordenEscucha= ordenEscucha;  
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
  listaDeCanciones;
  cancionActual;
  audio;
  currentPlaylist;
  paused;

   constructor(){

    this.listaDeCanciones = [

      /*new Song("1","Adore you","harry","Pop", "3 minutos", "2025","./Song1Cover.png","album1","./1.mp3"),
      new Song("2","Physical","dua", "genero2", "3 minutos", "2025","./2cover.png","album1","./2.mp3"),
      new Song("3","cancion3","autor3", "genero3", "3 minutos", "2025","./descarga.jpeg","album1","./3.mp3"),*/
      newSong({id:cancion1, nombre:"La costa del silecio",artista:"Mago de Oz",album:"Gaia",anio:"2003",duracion:"04:40:00",genero:"Rock",urlCover:"./assets/imagenes/cover1.jpg",urlSong:"./assets/audios/cancion1.mp3"}),
      newSong({id:cancion2,nombre:"Azul",artista:"Aztlán",album:"Zoe",anio:"2018",duracion:"03:14:00",genero:"rock alternativo",urlCover:"./assets/imagenes/cover2",urlSong:"./assets/audios/cancion2.mp3"}),
      newSong({id:cancion3,nombre:"I wanna be yours",artista:"Arctic Monkeys",album:"AM",anio:"2013",duracion:"03:04:00",genero:"Indie rock",urlCover:"./assets/imagenes/cover3.jpg",urlSong:"./assets/audios/cancion3.mp3"}),
      newSong({id:cancion4,nombre:"Love of my life",artista:"Queen",album:"A night at the opera",anio:"1975",duracion:"03:37:00",genero:"Rock",urlCover:"./assets/imagenes/cover4.jpg",urlSong:"./assets/audios/cancion4.mp3"}),
      newSong({id:cancion5,nombre:"Good Old-Fashioned lover boy",artista:"Queen",album:"A day at the races",anio:"1976",duracion:"02:53:00",genero:"Rock",urlCover:"./assets/imagenes/cover5.jpg",urlSong:"./assets/audios/cancion5.mp3"}),
      newSong({id:cancion6,nombre:"Snap out of it",artista:"Arctic Monkeys",album:"AM",anio:"2013",duracion:"03:13:00",genero:"Indie rock",urlCover:"./assets/imagenes/cover6.jpg",urlSong:'./assets/audios/cancion6.mp3'}),
      newSong({id:cancion7,nombre:"Feel good Inc",artista:"Gorillaz",album:"Demon days",anio:"2005",duracion:"03:34:00",genero:"Rock",urlCover:"./assets/imagenes/cover7.jpg",urlSong:"./assets/audios/cancion7.mp3"}),
      newSong({id:cancion8,nombre:"Money",artista:"The drums",album:"Portamento",anio:"2011",duracion:"03:54:00",genero:"Surf rock",urlCover:"./assets/imagenes/cover8.jpg",urlSong:"./assets/audios/cancion8.mp3"}),
      newSong({id:cancion9,nombre:"Origami",artista:"The rare occaions",album:"Big whoop",anio:"2021",duracion:"02:54:00",genero:"rock alternativo, el indie pop y el post-punk",urlCover:"./assets/imagenes/cover9.jpg",urlSong:"./assets/audios/cancion9.mp3"}),
      newSong({id:cancion10,nombre:"Like i can",artista:"Sam Smith",album:"In the lonely hour",anio:"2014",duracion:"02:47:00",genero:"Pop",urlCover:"./assets/imagenes/cover10.jpg",urlSong:"./assets/audios/cancion10.mp3"}),
      newSong({id:cancion11,nombre:"Happy together",artista:"The Trutles",album:"Happy together",anio:"1976",duracion:"02:56:00",genero:"Pop rock",urlCover:"./assets/imagenes/cover11.jpg",urlSong:"./assets/audios/cancion11.mp3"}),
      newSong({id:cancion12,nombre:"Titanium",artista:"David Guetta, Sia",album:"Nothing but the beat",anio:"2020",duracion:"04:05:00",genero:"Pop electronica",urlCover:"./assets/imagenes/cover12.jpg",urlSong:"./assets/audios/cancion12.mp3"}),
      newSong({id:cancion13,nombre:"Billie Bossa Nova",artista:"Billie Eilish",album:"Happier than ever",anio:"2021",duracion:"03:17:00",genero:"Pop",urlCover:"./assets/imagenes/cover13.jpg",urlSong:"./assets/audios/cancion13.mp3"}),
      newSong({id:cancion14,nombre:"The loneliest",artista:"Maneskin",album:"Teatro d'ira: Vol. I",anio:"2022",duracion:"04:07:00",genero:"Rock alternativo",urlCover:"./assets/imagenes/cover14.jpg",urlSong:"./assets/audios/cancion14.mp3"}),
      newSong({id:cancion15,nombre:"Say yes to haven",artista:"Lana de rey",album:"Say Yes to Heaven",anio:"2023",duracion:"03:29:00",genero:"Dream pop",urlCover:"./assets/imagenes/cover15.jpg",urlSong:"./assets/audios/cancion15.mp3"}),
      newSong({id:cancion16,nombre:"Favorite crime",artista:"Olivia Rodrigo",album:"SOUR",anio:"2021",duracion:"02:32:00",genero:"Pop",urlCover:"./assets/imagenes/cover16.jpg",urlSong:"./assets/audios/cancion16.mp3"}),
      newSong({id:cancion17,nombre:"Until I Found You",artista:"Stepdhen Sanchez",album:"Easy on my eyes",anio:"2022",duracion:"02:56:00",genero:"Rock",urlCover:"./assets/imagenes/cover17.jpg",urlSong:"./assets/audios/cancion17.mp3"}),
      newSong({id:cancion18,nombre:"I aint worried ",artista:"OneRepublic",album:"I aint worried",anio:"2022",duracion:"02:28:00",genero:"Pop",urlCover:"./assets/imagenes/cover18.jpg",urlSong:"./assets/audios/cancion18.mp3"}),
      newSong({id:cancion19,nombre:"Teeth",artista:"5 seconds o summer",album:"CALM",anio:"2020",duracion:"03:26:00",genero:"Pop rock",urlCover:"./assets/imagenes/cover19.jpg",urlSong:"./assets/audios/cancion19.mp3"}),
      newSong({id:cancion20,nombre:"House of Memories",artista:"Panic! At The Disco",album:"Death of bachelor",anio:"2016",duracion:"03:29:00",genero:"Pop rock",urlCover:"./assets/imagenes/cover20.jpg",urlSong:"./assets/audios/cancion20.mp3"}),
      newSong({id:cancion21,nombre:"Counting Stars",artista:"OneRepublic",album:"Native",anio:"2013",duracion:"04:17:00",genero:"Pop rock",urlCover:"./assets/imagenes/cover21.jpg",urlSong:"./assets/audios/cancion21.mp3"}),
      newSong({id:cancion22,nombre:"Thats what i want",artista:"Lil Nas X",album:"MONTERO",anio:"2021",duracion:"02:24:00",genero:"Pop",urlCover:"./assets/imagenes/cover22.jpg",urlSong:"./assets/audios/cancion22.mp3"}),
      newSong({id:cancion23,nombre:"Kiwi",artista:"Harry Styles",album:"Harry Styles",anio:"2017",duracion:"02:56:00",genero:"Pop",urlCover:"./assets/imagenes/cover23.jpg",urlSong:"./assets/audios/cancion23.mp3"}),
      newSong({id:cancion24,nombre:"Run",artista:"OneRepublic",album:"Human",anio:"2021",duracion:"02:48:00",genero:"Pop",urlCover:"./assets/imagenes/cover24.jpg",urlSong:"./assets/audios/cancion24.mp3"}),
      newSong({id:cancion25,nombre:"Cake by the ocean",artista:"DNCE",album:"DNCE ",anio:"2016",duracion:"03:39:00",genero:"Pop",urlCover:"./assets/imagenes/cover25.jpg",urlSong:"./assets/audios/cancion25.mp3"}),
      newSong({id:cancion26,nombre:"Woman",artista:"Doja Cat",album:"Planet  her",anio:"2021",duracion:"03:39:00",genero:"Pop",urlCover:"./assets/imagenes/cover26.jpg",urlSong:"./assets/audios/cancion26.mp3"}),
      newSong({id:cancion27,nombre:"Levitating ",artista:"Dua lipa, Dababy",album:"Future Nostalgia ",anio:"2020",duracion:"03:23:00",genero:"Pop",urlCover:"./assets/imagenes/cover27.jpg",urlSong:"./assets/audios/cancion27.mp3"}),
      newSong({id:cancion28,nombre:"Dont Start now",artista:"Dua lipa",album:"Future Nostalgia ",anio:"2020",duracion:"03:03:00",genero:"Pop",urlCover:"./assets/imagenes/cover28.jpg",urlSong:"./assets/audios/cancion28.mp3"}),
      newSong({id:cancion29,nombre:"Feel this moment",artista:"Pitbull, Christina Aguilera",album:"Global Warming",anio:"2012",duracion:"03:50:00",genero:"Pop",urlCover:"./assets/imagenes/cover29.jpg",urlSong:"./assets/audios/cancion29.mp3"}),
      newSong({id:cancion30,nombre:"Break My Heart",artista:"Dua lipa",album:"Future Nostalgia ",anio:"2020",duracion:"03:42:00",genero:"Pop",urlCover:"./assets/imagenes/cover30.jpg",urlSong:"./assets/audios/cancion30.mp3"
    })]      
                
   


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
    inputUser = inputUser.toLowerCase(inputUser);
    console.log(inputUser);
    let canciones = document.getElementById("resBusqueda");
    canciones.innerHTML = '';
    
    let resNombre = this.catalogoDeCanciones.filter(song => song.nombre.match(inputUser));
    let resAlbum = this.catalogoDeCanciones.filter(song => song.album.match(inputUser));
    let resArtista = this.catalogoDeCanciones.filter(song => song.artista.match(inputUser));
    
     let filtroDeCanciones = [...resNombre, ...resAlbum, ...resArtista];
     filtroDeCanciones = [...new Set(filtroDeCanciones)]
     this.mostrarBusquedaDeCanciones(filtroDeCanciones);
  }

  mostrarBusquedaDeCanciones(filtroDeCanciones){
    let canciones = document.getElementById("resBusqueda");
    filtroDeCanciones.forEach(song => {
       
      canciones.innerHTML = `<div class="contenedorCancion"><p id="res_${song.id}" class="remover">${song.nombre}</p><button class="playListas remover"><i id=""class="fa-solid fa-play"></i></button><button id="favorito"  class="remover agregarFavoritos"><i class="fa-solid fa-heart"></i></button></i><button  class="remover agregarPlaylist"><i class="fa-solid fa-plus"></i></button></div> `
     
   });
  }

 adelantar(){
  this.cancionActual;
  for(let i = 0; i<this.catalogoDeCanciones.length;i++){
    if(this.catalogoDeCanciones[i] == this.cancionActual)
    {
       if(this.play()){
        this.pausar();
       }
        
       else{
        this.play();
       }
       

       if((i+1)==this.catalogoDeCanciones.length){
        this.cancionActual=this.catalogoDeCanciones[0];
       }
        
       else{
        this.cancionActual=this.catalogoDeCanciones[i+1];
        this.audio.src = "/audios/" + this.cancionActual.urlSong;
        this.play();
        this.mostrarInfoyPortada(this.cancionActual);
       }
         break;
    }
  }
  }
  retroceder(){
    this.cancionActual;
    for(let i = this.catalogoDeCanciones.length - 1; i > 0;i--){
      if(this.catalogoDeCanciones[i] == this.cancionActual && this.cancionActual !==  undefined)
      {
         if(this.play()){
          this.pausar();
         }
          
         else{
          this.play();
         }
          
  
         if((i-1)==this.catalogoDeCanciones.length && this.cancionActual !==  undefined){
          this.cancionActual=this.catalogoDeCanciones[0];
         }
          
         else{
          this.cancionActual=this.catalogoDeCanciones[i-1];
          this.audio.src = "/audios/" + this.cancionActual.urlSong;
          this.play();
          this.mostrarInfoyPortada(this.cancionActual);
         }
            
            
         break;
      }
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
      this.audio.src = "/audios/" + this.cancionActual.urlSong;
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

  showPlaylists() {
    let playlistsDiv = document.getElementById('playlists');
    this.playlists.forEach(playlist => {
      let playlistDiv = document.createElement('div');
      playlistDiv.textContent = playlist.nombre;
      playlistsDiv.appendChild(playlistDiv);
    });
  }
  
  showFavorites() {
    let favoritesDiv = document.getElementById
  }

}


  Playlist(playlistName) {
    let playlist = this.playlists.find(playlist => playlist.nombre === playlistName);
    if (playlist) {
      this.cancionActual = playlist.listaDeCanciones[0];
      this.audio.src = this.cancionActual.urlSong;
      this.play();
    } else {
      console.log("No se encontró la lista de reproducción.");
    }
  }
  
  
  
  let reproductor = new Reproductor();

  const addToPlaylistButton = document.getElementById('addToPlaylist');
  const addToFavoritesButton = document.getElementById('addToFavorites');
  const playlistItems = document.getElementById('playlistItems');
  const favoritesItems = document.getElementById('favoritesItems');
  
  addToPlaylistButton.addEventListener('click', () => {
    let song = new Song(/* ... */);
    let playlistName = prompt("Ingresa el nombre de la lista de reproducción");
    reproductor.addSongToPlaylist(song, playlistName);
  });
  
  addToFavoritesButton.addEventListener('click', () => {
    let song = new Song(/* ... */);
    reproductor.favorites.push(song);
  });

let Songs = [
    {
        title: 'Cancion1',
        url: 'cancion1.mp3'
    },
    {
        title: 'Cancion2',
        url: 'cancion2.mp3'
    },
    {
        title: 'Cancion3',
        url: 'cancion3.mp3'
    }
]


function addToPlaylistFromSong(song) {
  if (!playlist.includes(song)) {
      playlist.push(song);
      updatePlaylist();
  }
}

function addToFavoritesFromSong(song) {
  if (!favorites.includes(song)) {
      favorites.push(song);
      updateFavorites();
  }
}

function updatePlaylist() {
  playlistItems.innerHTML = '';
  playlist.forEach((song, index) => {

    let audio = document.getElementById("audio");
let playlist = document.getElementById('playlist');
let tracks = playlist.getElementsByTagName('a');
let currentTrack = 0;
  });
audio.volume = 0.10;
audio.play();

init();

}
function init() {
    tracks[currentTrack].classList.add("active");

    for (let track of tracks) {
        track.addEventListener("click", function (e) {
            e.preventDefault();
            currentTrack = Array.from(tracks).indexOf(this);
            run(this.getAttribute('href'), audio, this);
        });
    }

    audio.addEventListener('timeupdate', function () {
        let duration = audio.duration;
        let currentTime = audio.currentTime;

        // Check if the current track has ended
        if (currentTime / duration > 0.99 && currentTrack < tracks.length - 1) {
            currentTrack++;
            run(tracks[currentTrack].getAttribute('href'), audio, tracks[currentTrack]);
        }
    });
}

function run(song, audio, link) {
    let parent = link.parentElement;

    for (let item of playlist.getElementsByTagName('li')) {
        item.classList.remove("active");
    }

    // Add the active class to the current list item
    parent.classList.add("active");

    audio.src = song;
    audio.load();
    audio.play();
}


const audio = new Audio('cancion1.mp3')
audio.volume = 0.1
audio.currentTime = 245

const input = document.getElementById('input')
const search = document.getElementById('search')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const mute = document.getElementById('mute')
const sound = document.getElementById('sound')

play.addEventListener('click', () => {
  audio.play()
})

pause.addEventListener('click', () => {
  audio.pause()
})

mute.addEventListener('click', () => {
  audio.volume = 0
})

sound.addEventListener('click', () => {
  audio.volume = 0.1
})

search.addEventListener('click', () => {
  audio.src = input.value
})

audio.addEventListener('ended', () => {
  alert('siguiente cancion')
  audio.src = 'cancion1.mp3'
  audio.play()
})



const nextButton = document.getElementById('next');

const songs = ["./assets/audios/cancion1.mp3","./assets/audios/cancion2.mp3","./assets/audios/cancion3.mp3","./assets/audios/cancion4.mp3","./assets/audios/cancion5.mp3","./assets/audios/cancion6.mp3","./assets/audios/cancion7.mp3","./assets/audios/cancion8.mp3","./assets/audios/cancion9.mp3","./assets/audios/cancion10.mp3","./assets/audios/cancion11.mp3","./assets/audios/cancion12.mp3","./assets/audios/cancion13.mp3","./assets/audios/cancion14.mp3","./assets/audios/cancion15.mp3","./assets/audios/cancion16.mp3","./assets/audios/cancion17.mp3)","./assets/audios/cancion18.mp3","./assets/audios/cancion19.mp3",
"./assets/audios/cancion20.mp3","./assets/audios/cancion21.mp3","./assets/audios/cancion22.mp3","./assets/audios/cancion23.mp3","./assets/audios/cancion24.mp3","./assets/audios/cancion25.mp3","./assets/audios/cancion26.mp3","./assets/audios/cancion27.mp3","./assets/audios/cancion28.mp3","./assets/audios/cancion29.mp3","./assets/audios/cancion30.mp3"
]

let audio = new Audio()

nextButton.addEventListener('click', changeAudio);
audio.addEventListener('ended', changeAudio);

let index = 0

function changeAudio() {
  if (!audio.src) {
    audio.src = songs[index];
    audio.play();
  } else {
    if (index === songs.length - 1) {
      index = 0;
    } else {
      index++
    }
    audio.src = songs[index];
    audio.play()
  }

}
