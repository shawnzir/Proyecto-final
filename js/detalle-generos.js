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
      <h3>Nombre De el genero: ${titleS}</h3> 
      
      
    </li>
      
    </ul>
    </article>
    `;


    
    contenedor.innerHTML = cancion;
    
})
.catch(function (e) {
    console.log(e)
})