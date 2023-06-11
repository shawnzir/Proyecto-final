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



// Buscador que ande 

let form = document.querySelector('form')
let inputdebusqueda= document.querySelector('input')

form.addEventListener('submit', function(e){
e.preventDefault()

if(inputdebusqueda.value.length < 2){

    alert("El campo tiene menos de 3 carateres, por favor ingrese de vuelta su busqueda")
    


} else {
    this.submit()
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
  
  let informacion = "";

  for (let i = 0; i < data.data.length; i++) {
    let title = data.data[i].title;
    let image = data.data[i].cover_medium;

    info += `<li>
      <h6 class="h6Album">${title}</h6> 
      <img src="${image}" class="imgAlbum">
    </li>`;
  }

  document.querySelector(".jsSongs").innerHTML = informacion;

})
.catch(function(error) {
  console.log("Error: " + error);
});
// Aca termina la API de Canciones


// Aca arranca la API de Artistas

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

      info += `<li>
        <h6 class="h6Album">${title}</h6> 
        <img src="${image}" class="imgAlbum">
      </li>`;
    }

    document.querySelector(".jsAlbum").innerHTML = info;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

// Aca termina la API de albumes.

