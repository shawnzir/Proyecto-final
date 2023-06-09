// Hover de HOME

let home = document.querySelector(".navIndex")


home.addEventListener('mouseover', function() {
    
    home.style.color = '#979594'
  });

home.addEventListener('mouseout', function() {

    home.style.color = 'black'
});

// Hover de Canciones

let canciones = document.querySelector(".navSongs")

canciones.addEventListener('mouseover', function() {

    canciones.style.color = '#979594'
  });

canciones.addEventListener('mouseout', function() {

    canciones.style.color = 'black'
});

// Hover de Generos

let generos = document.querySelector(".navGenres")

generos.addEventListener('mouseover', function() {

    generos.style.color = '#979594'
  });

generos.addEventListener('mouseout', function() {

    generos.style.color = 'black'
});

// Hover de Artistas

let artistas = document.querySelector(".navArtists")

artistas.addEventListener('mouseover', function() {

    artistas.style.color = '#979594'
  });

artistas.addEventListener('mouseout', function() {

    artistas.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// Albumes con las APIS

let urlAlbumes = ""