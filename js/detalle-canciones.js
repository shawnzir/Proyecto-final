// Hover de HOME

let home7 = document.querySelector(".navIndex")


home7.addEventListener('mouseover', function() {
    
    home7.style.color = '#979594'
  });

home7.addEventListener('mouseout', function() {

    home7.style.color = 'black'
});

// Hover de Canciones

let playlist7 = document.querySelector(".navPlaylist")

playlist7.addEventListener('mouseover', function() {

    playlist7.style.color = '#979594'
  });

playlist7.addEventListener('mouseout', function() {

    playlist7.style.color = 'black'
});

// Hover de Generos

let generos7 = document.querySelector(".navGenres")

generos7.addEventListener('mouseover', function() {

    generos7.style.color = '#979594'
  });

generos7.addEventListener('mouseout', function() {

    generos7.style.color = 'black'
});

// Hasta aca van los Hover del "a".

// buscador 

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


// buscador 



// Detalles


let qs =location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

let endPointartistdetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`



fetch(endPointartistdetalle)

.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

    let contenedor = document.querySelector(".jsCanciones")
    console.log(contenedor);


      let titleS = data.title;
      let imageS = data.album.cover_big;
      let nArtistas = data.artist.name;
      let album = data.album.title


    let cancion = `
    <article class="canciones-detalle" >
    
    <ul class="ul-canciones-detalle">
    <li class="img-detalle">
      <img  src="${imageS}">
    </li>
    <li >
      <h3>Nombre De La Cancion: ${titleS}</h3> 
      <h3>Nombre Del Artista: ${nArtistas}</h3> 
      <h3>Nombre Del Album: ${album}</h3> 
    </li>
      
    </ul>
    </article>
    `;


    
    contenedor.innerHTML = cancion;
    
})
.catch(function (e) {
    console.log(e)
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// si el array viene basyo podess con inner tex y if poner esto no tiene resultados











// detalles