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

let urlPlaylist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27"

fetch(urlPlaylist)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
})

.catch(function(error){
  console.log("el error es:" + error)
});
