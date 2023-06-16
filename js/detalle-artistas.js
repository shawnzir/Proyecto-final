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
    

let qs =location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

let endPointartistdetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

let endPointartistdetalleAlbum= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`



fetch(endPointartistdetalle)

.then(function(response){
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor = document.querySelector(".jsartistas-sec")
    console.log(contenedor);


      
      let imageS = data.picture_big;
      let nArtistas = data.name;
      


    let cancion = `
    <article class="canciones-detalle" >
    
    <ul class="ul-canciones-detalle">
    <li class="img-detalle">
      <img  src="${imageS}">
    </li>
    <li >
      
      <h3>Nombre Del Artista: ${nArtistas}</h3> 
      
    </li>
      
    </ul>
    </article>
    `;


    
    contenedor.innerHTML = cancion;
    
})
.catch(function (e) {
    console.log(e)
})


// OTRO FECH 
// FALTA TERMINAR bien 
fetch(endPointartistdetalleAlbum)

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor1 = document.querySelector(".Palbumes")
    console.log(contenedor1);

let albumes = ""

    for(let i = 0; i < 5; i++){
      
      
      let album = data.data[i].title


      albumes += `
    <li>
      <h3>Nombre Del Album: ${album}</h3> 
    </li>
      
   
    `;

    }
    
    contenedor1.innerHTML = albumes;
    
})
.catch(function (e) {
    console.log(e)
})
