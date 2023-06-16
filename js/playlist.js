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

let urlPlaylist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27"

fetch(urlPlaylist)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
  let cancion = "";

  for (let i = 0; i <  data.data.length; i++) {
    let titleS = data.data[i].title;
    let imageS = data.data[i].album.cover_medium;
    let nartistas = data.data[i].artist.name;

    cancion += `
    
    <article class="Playlist" >
      <a href="./playlist.html">
      <ul class="p-playlist">
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

  document.querySelector(".jsPlaylist").innerHTML = cancion;

})

.catch(function(error){
  console.log("el error es:" + error)
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
