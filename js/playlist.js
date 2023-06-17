// Hover de HOME

let home1 = document.querySelector(".navIndex")


home1.addEventListener('mouseover', function() {
    
    home1.style.color = '#979594'
  });

home1.addEventListener('mouseout', function() {

    home1.style.color = 'black'
});

// Hover de Canciones

let playlist1 = document.querySelector(".navPlaylist")

playlist1.addEventListener('mouseover', function() {

    playlist1.style.color = '#979594'
  });

playlist1.addEventListener('mouseout', function() {

    playlist1.style.color = 'black'
});

// Hover de Generos

let generos1 = document.querySelector(".navGenres")

generos1.addEventListener('mouseover', function() {

    generos1.style.color = '#979594'
  });

generos1.addEventListener('mouseout', function() {

    generos1.style.color = 'black'
});
// Hasta aca van los Hover del "a".

// Arranca el Buscador

let form = document.querySelector('form')
let inputdebusqueda= document.querySelector('input')

form.addEventListener('submit', function(e){
e.preventDefault()

if(inputdebusqueda.value.length === 0 ){

    alert("El campo esta vacio, por favor ingrese de vuelta su busqueda")

    } 
  
  else {

  if(inputdebusqueda.value.length < 3){

    alert("El campo tiene menos de 3 carateres, por favor ingrese de vuelta su busqueda")

  }
  else { 
      
      this.submit() 
  
  }
}
})
// Aca termina el Buscador

// Aca arranca 


let recuperoStorage = localStorage.getItem("playlist");
let storageToArray = JSON.parse(recuperoStorage); 
let favoritos = storageToArray

let contenedorFavs= document.querySelector(".playlist");
let misFavoritos = "";

if(recuperoStorage !== undefined|| favoritos.length !==0){
  for (let i=0; i<favoritos.length; i++){
    console.log(favoritos[i]);
    
    let urlFavs=  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`
    fetch(urlFavs)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let titleS = data.title
      let albumCover = data.album.cover_medium
      let id = data.id
      let albumId = data.album.id
      let albumTitle = data.album.title
      let artistId = data.artist.id
      let artistName = data.artist.name

      misFavoritos += `<article class= "content-playlist"> 
      <h3>
      <a class="nombre-cancion" href="./detalle-canciones.html?id=${id}">${titleS}</a>
      </h3>
      <a class="nombre-cancion" href="./detalle-canciones.html?id=${id}">
      <img src="${albumCover}" alt="${titleS}">
      </a>
      <article class="informacion-canciones">
      <a href="./detalle-albumes.html?id=${albumId}">${albumTitle}</a>
      <a href="./detalle-artistas.html?id=${artistId}">${artistName}</a> 
      </article>
            </article>`
            contenedorFavs.innerHTML = misFavoritos
    
        })
        .catch(function (e) {
            console.log(e);
        })
    }
}

if(favoritos.length ==0){
    contenedorFavs.innerHTML= "<h2> No se encontraron favoritos</h2>" 
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 

    