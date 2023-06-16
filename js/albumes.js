// Hover de HOME

let home5 = document.querySelector(".navIndex")


home5.addEventListener('mouseover', function() {
    
    home5.style.color = '#979594'
  });

home5.addEventListener('mouseout', function() {

    home5.style.color = 'black'
});

// Hover de Canciones

let playlist5 = document.querySelector(".navPlaylist")

playlist5.addEventListener('mouseover', function() {

    playlist5.style.color = '#979594'
  });

playlist5.addEventListener('mouseout', function() {

    playlist5.style.color = 'black'
});

// Hover de Generos

let generos5 = document.querySelector(".navGenres")

generos5.addEventListener('mouseover', function() {

    generos5.style.color = '#979594'
  });

generos5.addEventListener('mouseout', function() {

    generos5.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// Albumes con las APIS

let urlAlbumes = "https://api.deezer.com/album/302127"

{
  fetch(urlAlbumes) 
  .then(function(response) {
  
  return response.json()
})
  .then(function(data) {
  console.log(data);
})

.catch(function(error) {
  console.log("Error: " + error);
});
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
