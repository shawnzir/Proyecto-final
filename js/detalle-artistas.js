// Hover de HOME

let home4 = document.querySelector(".navIndex")


home4.addEventListener('mouseover', function() {
    
    home4.style.color = '#979594'
  });

home4.addEventListener('mouseout', function() {

    home4.style.color = 'black'
});

// Hover de Canciones

let playlist4 = document.querySelector(".navPlaylist")

playlist4.addEventListener('mouseover', function() {

    playlist4.style.color = '#979594'
  });

playlist4.addEventListener('mouseout', function() {

    playlist4.style.color = 'black'
});

// Hover de Generos

let generos4 = document.querySelector(".navGenres")

generos4.addEventListener('mouseover', function() {

    generos4.style.color = '#979594'
  });

generos4.addEventListener('mouseout', function() {

    generos4.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// Detalles


let queryString = location.search;
let qsObject = new URLSearchParams(queryString);
let id = qsObject.get('id')

let endPointArtistDetalle = `https://api.deezer.com/artist/${id}`

fetch(endPointArtistDetalle)
.then(function(response) {
  return response.json();
})
.then(function(data){
  console.log(data)

    let section = document.querySelector(".contenedor-artista")

      let titleS = data.title;
      let imageS = data.album.cover_medium;
      let nArtistas = data.artist.name;
      let album = data.album.title


    let cancion = `
    <article class="canciones" >
    
    <ul class="ul-canciones">
    <li >
      <h5>Nombre De La Cancion: ${titleS}</h5> 
      <h5>Nombre Del Artista: ${nArtistas}</h5> 
      <h5>Nombre Del Album: ${album}</h5> 
      <img src="${imageS}">
    </li>
    </ul>
    </article>
    `;


    
    section.innerHTML = cancion;
    
})
.catch(function (e) {
    console.log(e)
})