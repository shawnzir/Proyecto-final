// Agregar endpoint de deezer para el buscador 

    let queryString = new URLSearchParams(location.search); //Esto significa todo el querystring, es decir: buscar="cualquier cosa que hayamos buscado"
    queryString.get("buscar")

    console.log(queryString);


// Hover para los "a", cuando paso por arriba cambia de color.
  
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



// Buscador que ande 

let form = document.querySelector('form')
let inputdebusqueda= document.querySelector('input')

form.addEventListener('submit', function(e){
e.preventDefault()

if(inputdebusqueda.value.length < 2){

    alert("El campo tiene menos de 3 carateres, porfavor ingrese de vuelta su busqueda")
    


} else {
    this.submit()
}
})


let urlalbum = "https://api.deezer.com/album/302127" 

fetch(urlalbum)
.then(function (response) {
    return response.json()
})

.then(function (data){

    

    
})
