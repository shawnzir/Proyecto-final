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


let urlm = "" //poner url

fetch(urlm)
.then(function (response) {
    return response.json()
})

.then(function (data){

    let packcanciones= data.track.data;
    console.log(packcanciones)

 //   let listadecanciones= document.querySelector(".secanciones")
 //   let canciones = ""
 //   for(let i=0; i< 5; i++){
//
//        canciones += `<article class="bloque-canciones">
//        <h3> <a class="nombrecancion" href=""></a>Nombre cancion</h3>
//    <img src="" alt="">
//    <article class="bl-nombrec">
//    <a href="">Nombre album</a>
//    <a href="">Nombre artista</a>
//    </article>
//    </article>`
//    }
    
})
