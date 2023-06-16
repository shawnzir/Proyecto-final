// Hover del Index

let home = document.querySelector(".navIndex")


home.addEventListener('mouseover', function() {
    
    home.style.color = '#979594'
  });

home.addEventListener('mouseout', function() {

    home.style.color = 'black'
});

// Hover de Canciones

let playlist = document.querySelector(".navPlaylist")

playlist.addEventListener('mouseover', function() {

    playlist.style.color = '#979594'
  });

playlist.addEventListener('mouseout', function() {

    playlist.style.color = 'black'
});

// Hover de Generos

let generos = document.querySelector(".navGenres")

generos.addEventListener('mouseover', function() {

    generos.style.color = '#979594'
  });

generos.addEventListener('mouseout', function() {

    generos.style.color = 'black'
});

// Hasta aca van los Hover del "a".



// Buscador 

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

// Aca arranca la API de Canciones

let urlSongs = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks";

fetch(urlSongs)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.data); // Solo quiero el Cover y el Title.
  
  let cancion = "";

  for (let i = 0; i <  data.data.length; i++) {
    let titleS = data.data[i].title;
    let imageS = data.data[i].album.cover_medium;
    let nartistas = data.data[i].artist.name;
    let detalle = data.data[i].id

    cancion += `
    
    <article class="canciones">
    <a href="./detalle-canciones.html?id=${detalle}">
    <ul class="ul-canciones">
    <li >
      <h4>${titleS}</h4> 
      <img src="${imageS}">
      <h5>${nartistas}</h5> 
    </li>
    </ul>
    </a>
    </article>
    `;
  }

  document.querySelector(".jsSongs").innerHTML = cancion;

})
.catch(function(error) {
  console.log("Error: " + error);
})
// Aca termina la API de Canciones


// Aca arranca la API de Artistas

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists") // Usamos fetch ya que nos permite consultar un recurso de forma asincronica, es decir, iniciar una accion sin depender de la finalizacion de acciones anteriores.
    .then(function(respuesta){ // En este caso el parametro "(response)" es el que recibe la informacion del endpoint, obtenida por el fetch.
        return respuesta.json(); // Utiilizamos el metodo "json()" con el fin de decodificar la informacion obtenida por el fetch y poder utilizarla en forma de arrays, objetos, etc... Al ser su proceso asincronico, necesitamos de otra promesa, es decir, un segundo "then"
    })
    .then(function(informacion) { // El parametro "informacion", recibe la informacion decodificada gracias al primer then. Dentro de esta funcion escribiremos el codigo para poder trabajar con la informacion obtenida del API.
        console.log(informacion.data)

        let albums = ""

              // for(let i = 0; i < 5; i++) lo de abajo lo podemos hacer asi y solo muestra 5, de esta manera va a ser mas corto y prolio


        for(let i = 0; i < informacion.data.length; i++){
            let titleA = informacion.data[i].name;
            let imageA = informacion.data[i].picture_medium

            albums += `
            
            <article class="artistas">
            <a href="./detalle-generos.html">
            <ul class="ul-artistas">
            <li>
            <h4>${titleA}</h4>
            <img src="${imageA}"> 
            </li>
            </ul>
            </a>
            </article>
            `
            

            document.querySelector(".jsArtistas").innerHTML = albums
        }
    })
    .catch(function(error) {
        console.log("Error:", error);
    })

// Aca termina la API de Artistas

// Aca arranca la API de Albumes.

let urlAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"; 

fetch(urlAlbum)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.data); // Solo quiero el Cover y el Title.

    let info = "";
    

    for (let i = 0; i < data.data.length; i++) {
      let title = data.data[i].title;
      let image = data.data[i].cover_medium;

      info += `
      <article class="albums">
      <a href="./detalle-generos.html">
      <ul class="ul-album">
      <li>
        <h4>${title}</h4> 
        </li>
        <li>
        <img src="${image}" class="imgAlbum">
        </li>
      </ul>
      </a>
      </article>
      
      `;
    }

    document.querySelector(".jsAlbum").innerHTML = info;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
// Aca termina la API de albumes.

