// Hover de HOME

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


let qs =location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

let endPointartistdetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`

let endArtistasGeneros = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`



fetch(endPointartistdetalle)

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor = document.querySelector(".jsgenere")
    console.log(contenedor);


      let titleS = data.name;
      


    let cancion = `
    <article class="genero-detalle" >
    
    <ul class="ul-genero-detalle">
    <li >
      <h2>Nombre De el genero: ${titleS}</h2> 
      
      
    </li>
      
    </ul>
    </article>
    `;


    
    contenedor.innerHTML = cancion;
    
})
.catch(function (e) {
    console.log(e)
})

fetch(endArtistasGeneros)

.then(function (response) {
  return response.json()
  
})

.then (function (data) {
console.log(data)
  
let contenedor2 = document.querySelector(".Nombre-artsistasg")

let artistasgenero = ""

for (let i = 0; i < 5; i++) {
  
  let arraysgen = data.data[i].name
  let arraysgenp = data.data[i].picture

artistasgenero+=`

  <h3>Artistas Del Genero: ${arraysgen}</h3>
  <img src="${arraysgenp}">
  `

    

  contenedor2.innerHTML = artistasgenero
}})